# test-colyseus

## Client

Start development server:

```
npm run start
```

To create a production build:

```
npm run build
```

Production files will be placed in the `www` folder. Then upload those files to a web server.

## Colyseus

    -npm run start to localhost

## Capacitor Setup to build android app

    -npx cap init
    -npm run build (this builds the www folder we need for capacitor to create android app)
    -npx cap add android
    -npx cap open android (opens project in android studio)
    -You will need to edit the App-> Manifests -> AndroidManifest.xml file thru Android Studio, to add this into <application> tag (in order for the app to recognize colyseus local server):

        android:usesCleartextTraffic="true"
        
        Should look something like this:
        
          android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/AppTheme"
        android:usesCleartextTraffic="true">
        
    -Run emulator with Android API 29+
    -Should get:
        Listening on ws://localhost:2567
        client joined the room -  ia4D06pyM
        
    -Expected result: When mobile screen is powered off and enters sleep, colyseus server recognizes dropped websocket. Currently takes 3 minutes+ for it to recognize. Use to take seconds.
