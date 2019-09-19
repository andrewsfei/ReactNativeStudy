package com.studyreactdemo.util;

import android.widget.Toast;


/**
 * Created by wuxiaomin on 2018/2/27.
 * <p>
 * I am what I am is color not the same as fireworks ！
 */

public class ToastUtil {

    private volatile static Toast mToast;

    /**
     * 吐司
     * @param msg
     */
    public static void showToast( String msg) {
        if(mToast == null){
//            mToast = Toast.makeText(CZBApplication.mainApplication, msg, Toast.LENGTH_SHORT);
        }
        mToast.setText(msg);
        mToast.show();
    }
}
