# USESI Mobile Framework7 PhoneGap Application 

> [Framework7](http://www.idangero.us/framework7) is a Mobile UI framework that can be used to build hybrid apps with PhoneGap.


## Usage

### Easiest way to test this would be running these in the command line inside the www/ folder:

   >$ cordova build
   #
   >$ cordova run browser

If you have xcode and android studio installed then you can run IOS and Android emulators by running these commands inside the www/ folder:

   >$ cordova build
   
### IOS:

   >$ cordova run ios
   #
   
### Android:
   >$ cordova run android
   
### To add other platforms simply tpye in this command:

   >$ cordova platform add (ios/android/browser/...etc) --save
   
### To remove platforms:

   >$ cordova platform remove (ios/android/browser/...etc) --save
   
### To view plugins this application uses:

   >$ cordova plugin list
   
### To add plugins to this aplication type:

   >$ cordova plugin add cordova-plugin-(plugin-name) --save
   
### To remove plugins:

   >$ cordova plugin remove cordova-plugin-(plugin-name) --save
    

### Most of the work is done in www/index.html and www/js/my-app.js


## Current Plugins:

   cordova-plugin-camera 2.4.1 "Camera"
   cordova-plugin-compat 1.1.0 "Compat"
   cordova-plugin-console 1.0.7 "Console"
   cordova-plugin-statusbar 2.2.3 "StatusBar"
   cordova-plugin-whitelist 1.2.2 "Whitelist"

  
