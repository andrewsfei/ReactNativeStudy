package com.studyreactdemo.base;

import android.app.Activity;
import android.os.Bundle;
import android.view.MenuItem;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

/**
 * projectName : CzbReactNative
 * user: kimi
 * email : 24750@163.com
 * date : 2018/4/14
 * feature :
 **/
public abstract class BaseActivity extends AppCompatActivity {

    protected Activity mActivity;
    protected Bundle mSavedInstanceState;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if(isFinishing()) return;
        mActivity = this;
        mSavedInstanceState = savedInstanceState;
        if(getLayoutId() > 0){
            setContentView(getLayoutId());
            initViews();
            initDatas();
        }
    }

    protected abstract int getLayoutId();
    protected abstract void initViews();
    protected abstract void initDatas();

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        if(item.getItemId() == android.R.id.home){
            mActivity.finish();
            return true;
        }
        return super.onOptionsItemSelected(item);
    }
}
