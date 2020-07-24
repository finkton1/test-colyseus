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
        
    -Run emulator with Android API 29+
