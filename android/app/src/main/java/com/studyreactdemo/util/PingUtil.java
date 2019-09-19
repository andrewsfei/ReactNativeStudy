package com.studyreactdemo.util;

import android.util.Log;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * projectName : CzbReactNative
 * user: kimi
 * email : 24750@163.com
 * date : 2018/4/14
 * feature :
 **/
public class PingUtil {

    /**
     * 获取ping ip 的丢包率和延迟率
     *
     * @param targetUrl
     * @param count
     * @param timeout
     * @return
     */
    public static String getPingPacket(String targetUrl, int count, int timeout) {
        int lossValue = 0, delayValue = 0;
        try {
            // -c 次数 -w超时时间
            String command = new StringBuffer().append("/system/bin/ping -c ").append(count).append(" -w ").append(timeout).append(" ").append(targetUrl).toString();
            Process p = Runtime.getRuntime().exec(command);
            BufferedReader buf = new BufferedReader(new InputStreamReader(p.getInputStream()));
            String text = null;
            while ((text = buf.readLine()) != null) {
                if (text.contains("packet loss")) { //丢包率
                    String[] split = text.split(" ");
                    for (String loss : split) {
                        if (loss.contains("%")) {
                            lossValue = Integer.parseInt(loss.replace("%", ""));
                            Log.d("丢包率:", lossValue + "");
                        }
                    }
                }
                if (text.contains("/avg")) { //延迟率
                    String[] split = text.split("=");
                    delayValue = (int) Float.parseFloat(split[1].split("/")[1]);
                    Log.d("延迟率:", delayValue + "");
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return lossValue + "&&" + delayValue;
    }

}
