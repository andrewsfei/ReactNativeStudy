package com.studyreactdemo;


import android.Manifest;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Build;
import android.os.Handler;
import android.os.Message;
import android.os.Bundle;
import android.util.Log;
import android.view.KeyEvent;

import com.facebook.react.ReactActivity;
import com.studyreactdemo.util.CommonUtils;

public class SplashActivity extends ReactActivity {

    private Handler mHandler = null;
    private final int CloseApp = 0;//关闭APP
    private final long CloseTime = 3*1000;//默认设置2秒关闭
    private BroadcastReceiver broadcastReceiver;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.launch_screen);
        registerCloseSplash();
        if(mHandler == null){
            mHandler = new Handler() {
                @Override
                public void handleMessage(Message msg) {
                    super.handleMessage(msg);
                    switch (msg.what){
                        case CloseApp:
                            try{
                                setResult(CommonUtils.SplashActivityReturnCode);
                                finish();
                                overridePendingTransition(0, 0);
                            }catch (Exception e){

                            }
                            break;
                    }
                }
            };
        }
        mHandler.sendEmptyMessageDelayed(CloseApp,CloseTime);
    }

    /**
     * 注册关闭闪屏页面
     * */
    private void registerCloseSplash(){
        IntentFilter filter = new IntentFilter();
        filter.addAction(CommonUtils.CloseSplash);//关闭闪屏页面
        if(broadcastReceiver == null){
            broadcastReceiver = new BroadcastReceiver() {
                @Override
                public void onReceive(Context context, Intent intent) {
                    synchronized (SplashActivity.class){
                        String action = intent.getAction();
                        if(action.equals(CommonUtils.CloseSplash)){
                            mHandler.sendEmptyMessageDelayed(CloseApp,500);//收到通知后0.5s后关闭闪屏页面
                        }
                    }
                }
            };
            this.registerReceiver(broadcastReceiver,filter);
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        mHandler = null;
        if(broadcastReceiver != null){
            this.unregisterReceiver(broadcastReceiver);
        }
    }

    //禁止使用返回键返回到上一页,但是可以直接退出程序**
    @Override
    public boolean onKeyDown(int keyCode,KeyEvent event){
        if(keyCode==KeyEvent.KEYCODE_BACK){
            return true;//不执行父类点击事件
        }
        return super.onKeyDown(keyCode, event);//继续执行父类其他点击事件
    }


}
