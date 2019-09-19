package com.studyreactdemo.util;

import android.app.Activity;
import android.content.Context;
import android.graphics.drawable.ColorDrawable;
import android.os.Build;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.widget.FrameLayout;

import androidx.annotation.ColorInt;

/**
 * projectName : CzbReactNative
 * user: kimi
 * email : 24750@163.com
 * date : 2018/4/14
 * feature :
 **/
public class StatusBarUtil {

    private static final int FLAG_ID = 0x6666;

    /**
     * 状态栏开关
     * @param hidden true 隐藏 false 显示
     */
    public static void setHidden(Activity activity,boolean hidden){
        if (hidden) {
            activity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
            activity.getWindow().clearFlags(WindowManager.LayoutParams.FLAG_FORCE_NOT_FULLSCREEN);
        } else {
            activity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_FORCE_NOT_FULLSCREEN);
            activity.getWindow().clearFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
        }
    }

    /**
     * 设置状态栏的颜色
     * @param color
     */
    public static void setStatusBarColor(Activity activity,@ColorInt int color){
        if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT){
            Window window = activity.getWindow();
            ViewGroup decorView = (ViewGroup) window.getDecorView();
            View contentView = window.findViewById(android.R.id.content);
            window.addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
            View flagView = decorView.findViewById(FLAG_ID);
            if(flagView == null){
                contentView.setPadding(0,getStatusBarHeight(activity),0,0);
                flagView = new View(decorView.getContext());
                flagView.setId(FLAG_ID);
                flagView.setBackground(new ColorDrawable(color));
                FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT,getStatusBarHeight(activity));
                decorView.addView(flagView,layoutParams);
            }else{
                flagView.setBackground(new ColorDrawable(color));
            }
        }
    }

    /**
     * 获取状态栏的高度
     * @param context
     * @return
     */
    public static int getStatusBarHeight(Context context){
        int statusBarHeight = -1;
        int resourceId = context.getResources().getIdentifier("status_bar_height", "dimen", "android");
        if (resourceId > 0) {
            statusBarHeight = context.getResources().getDimensionPixelSize(resourceId);
        }
        return statusBarHeight;
    }
}
