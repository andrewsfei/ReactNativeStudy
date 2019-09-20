package com.studyreactdemo;

import android.app.Application;

import com.facebook.react.BuildConfig;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;

import org.devio.rn.splashscreen.SplashScreenReactPackage;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.studyreactdemo.rnpackage.NotificationPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            //修改之前
            return BuildConfig.DEBUG;
            //源码修改之后
/*            ReactNativeHost rnh=((ReactApplication) getApplication()).getReactNativeHost();
            Class<?>cls=rnh.getClass();
            Object support= null;
            try {
                Method method = cls.getDeclaredMethod("getUseDeveloperSupport", new Class[]{});
                method.setAccessible(true);
                support=method.invoke(rnh);
            } catch (NoSuchMethodException e) {
                e.printStackTrace();
            } catch (InvocationTargetException e) {
                e.printStackTrace();
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }
            return (boolean) support;*/

        }

/*    @Override
    protected List<ReactPackage> getPackages() {
      @SuppressWarnings("UnnecessaryLocalVariable")
      List<ReactPackage> packages = new PackageList(this).getPackages();
      // Packages that cannot be autolinked yet can be added manually here, for example:
      // packages.add(new MyReactNativePackage());


      packages.add( new SplashScreenReactPackage()); //here

      return packages;
    }*/


        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new RNGestureHandlerPackage(),
                    new SplashScreenReactPackage(),
                    new NotificationPackage()
            );
        }


        @Override
        protected String getJSMainModuleName() {
//      return "index";
            return "App";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }
}
