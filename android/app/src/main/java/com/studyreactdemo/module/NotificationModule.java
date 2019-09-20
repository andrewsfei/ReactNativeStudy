package com.studyreactdemo.module;

import android.content.Intent;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class NotificationModule extends ReactContextBaseJavaModule {

    public NotificationModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "Notification";
    }

    @ReactMethod
    public void showContentView() {
        getCurrentActivity().sendBroadcast(new Intent("com.studyreactdemo.show"));
    }
}