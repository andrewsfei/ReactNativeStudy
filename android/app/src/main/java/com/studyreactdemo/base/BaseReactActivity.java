package com.studyreactdemo.base;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.util.Log;
import android.view.MotionEvent;
import android.view.WindowManager;

import com.facebook.react.ReactActivity;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.studyreactdemo.util.CommonUtils;

/**
 * projectName : CzbReactNative
 * user: kimi
 * email : 24750@163.com
 * date : 2018/6/5
 * feature :
 **/
public class BaseReactActivity extends ReactActivity {

    private long firstDownTime;
    private Handler mHanlder = null;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        if(mHanlder == null){
            mHanlder = new Handler(){
                @Override
                public void handleMessage(Message msg) {
                    super.handleMessage(msg);
                    switch (msg.what){
                        case 0:
                            Log.e("lookat","kankab");
                            getReactInstanceManager().getCurrentReactContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("updateapp", "active");
                            break;
                    }
                }
            };
        }

    }

    @Override
    public boolean dispatchTouchEvent(MotionEvent event) {
        //如果间隔小于300，则不分发
        if(event.getAction() == MotionEvent.ACTION_DOWN){
            long currentDownTime = System.currentTimeMillis();
            if(currentDownTime - firstDownTime < 300){
                return false;
            }
            firstDownTime = currentDownTime;
        }
        return super.dispatchTouchEvent(event);
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if(resultCode == CommonUtils.SplashActivityReturnCode){
            mHanlder.sendEmptyMessageDelayed(0,500);
        }
    }


}
