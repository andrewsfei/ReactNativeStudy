package com.studyreactdemo.util;

import android.app.ActivityManager;
import android.app.Application;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.widget.Toast;

/**
 * projectName : CzbReactNative
 * user: kimi
 * email : 24750@163.com
 * date : 2018/4/14
 * feature :
 **/
public class AppUtil {
    private static boolean isSpeakorInvoice = false;//默认扬声器
    /**
     * 包名判断是否为主进程
     *
     * @param
     * @return
     */
    public static boolean isMainProcess(Application application){
        return application.getPackageName().equals(getCurrentProcessName(application));
    }


    /**
     * 获取当前进程的名称
     * @param application
     * @return
     */
    public static String getCurrentProcessName(Application application) {
        int pid = android.os.Process.myPid();
        String processName = "";
        ActivityManager manager = (ActivityManager) application.getSystemService(Context.ACTIVITY_SERVICE);
        for (ActivityManager.RunningAppProcessInfo process : manager.getRunningAppProcesses()) {
            if (process.pid == pid) {
                processName = process.processName;
                break;
            }
        }
        return processName;
    }

    /**
     * 获取当前app的版本号name
     * @return
     */
    public static String getAppVersionName(Application application){
        try {
            PackageInfo packageInfo = application.getPackageManager().getPackageInfo(application.getPackageName(), 0);
            return packageInfo.versionName;
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }
        return "1.0";
    }

    /**
     * 获取当前app的版本号code
     * @return
     */
    public static int getAppVersionCode(Application application){
        try {
            PackageInfo packageInfo = application.getPackageManager().getPackageInfo(application.getPackageName(), 0);
            return packageInfo.versionCode;
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }
        return 1;
    }

    /**
     * 去评分
     */
    public static void goGrade(Application application){
        try{
            Uri uri = Uri.parse("market://details?id="+application.getPackageName());
            Intent intent = new Intent(Intent.ACTION_VIEW,uri);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            application.startActivity(intent);
        }catch(Exception e){
            Toast.makeText(application, "您的手机没有安装Android应用市场", Toast.LENGTH_SHORT).show();
            e.printStackTrace();
        }
    }

    public static void setSpeakorInvoice(boolean state){
       isSpeakorInvoice = state;
    }

    public static boolean getSpeakorInvoice(){
        return isSpeakorInvoice;
    }
}
