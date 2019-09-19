package com.studyreactdemo.util;

import android.content.Context;
import android.content.SharedPreferences;


/**
 * projectName : CzbReactNative
 * user: kimi
 * email : 24750@163.com
 * date : 2018/4/14
 * feature : 本地缓存工具类
 **/
public class SPutil {

    private static final String SP_NAME = "sp_czb_app.xml";

    private static SharedPreferences mSharedPreferences;

    /**
     * 单利管理
     * @return
     */
/*    public static SharedPreferences getInstance(){
        if(mSharedPreferences == null)
            mSharedPreferences = CZBApplication.mainApplication.getSharedPreferences(SP_NAME, Context.MODE_PRIVATE);
        return mSharedPreferences;
    }*/

    public void putString(String key, String value){
        SharedPreferences.Editor edit = mSharedPreferences.edit();
        edit.putString(key,value);
        edit.apply();
    }

    public String getString(String key){
        return mSharedPreferences.getString(key,"");
    }

    public void putBoolean(String key,boolean value){
        SharedPreferences.Editor edit = mSharedPreferences.edit();
        edit.putBoolean(key,value);
        edit.apply();
    }

    public boolean getBoolean(String key){
        return mSharedPreferences.getBoolean(key,false);
    }

    public void putFloat(String key,float value){
        SharedPreferences.Editor edit = mSharedPreferences.edit();
        edit.putFloat(key,value);
        edit.apply();
    }

    public float getFloat(String key){
        return mSharedPreferences.getFloat(key,0.0f);
    }
}
