package com.studyreactdemo;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.graphics.Color;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.View;

import com.studyreactdemo.base.BaseActivity;
import com.studyreactdemo.base.BaseReactActivity;
import com.studyreactdemo.base.ReactActivity;
import com.studyreactdemo.util.CommonUtils;

//import org.devio.rn.splashscreen.SplashScreen; // here

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */

    private View mRootView;


    @Override
    protected void onCreate(Bundle savedInstanceState) {

        //第一种第三方库（引导页）
//        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);

/*
   //第二种方式
   if(!BuildConfig.DEBUG){
            startActivityForResult(new Intent(this,SplashActivity.class), CommonUtils.MainActivityRequestCode);
            //startActivity(new Intent(this,SplashActivity.class));//跳转到闪屏页面
            // activity开启无动画
            overridePendingTransition(0, 0);
        }

        getWindow().getDecorView().setBackgroundColor(Color.WHITE);*/

/***
 * 第三种方式
 */
        //获取rnrootview
        mRootView = getRootView();
        //模拟loadding图片
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                setContentView(mRootView.getRootView());
            }
        }, 2000);

        registerReceiver(new BroadcastReceiver() {
            @Override
            public void onReceive(Context context, Intent intent) {
                mRootView.setVisibility(View.VISIBLE);
                Log.d("页面---","页面显示了。。。");
            }
        },new IntentFilter("com.studyreactdemo.show"));
    }

    @Override
    protected String getMainComponentName() {
        return "StudyReactDemo";
    }

}
