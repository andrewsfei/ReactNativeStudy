package com.studyreactdemo.util;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class EventEmitterUtil {
    /**
     * 向RN发送消息
     *
     * @param reactContext
     * @param eventName：发消息的type，或者说key值
     * @param message：消息
     */

    public static void sendStrMessage(ReactContext reactContext, String eventName, String message) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, message);
    }

    public static void sendMessage(ReactContext reactContext, String eventName, WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }
}
