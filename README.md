# cordova-plugin-rongcloud-im-ionic2

cordova-plugin-rongcloud-im的ionic2 ionic-native封装


# Installation

Install the Cordova and Ionic Native plugins:

    ionic cordova plugin add cordova-plugin-rongcloud-im
    
Alternatively, you can install the latest version of the plugin directly from git:

    ionic cordova plugin add https://github.com/rongcloud/cordova-plugin-rongcloud-im

# Supported platforms
- Android
- iOS

The plugin is available via a global variable named `RongCloudLibPlugin`. It exposes the following properties and functions.

All functions accept optional success and failure callbacks as their final two arguments, where the failure callback will receive an error string as an argument unless otherwise noted.

# Usage

The dist directory will contain a sub directory @ionic-native with all the packages compiled in there. Copy the package(s) you created/modified to your app's node_modules under the @ionic-native directory. (e.g. cp -r dist/@ionic-native/plugin-name ../my-app/node_modules/@ionic-native/).

⚠️⚠️ 将 dist/@ionic-native 的 rongcloud文件夹复制到 ionic2项目的 node_modules/@ionic-native/ 下

```
Add Plugins to Your App's Module

After installing a plugin’s package, add it to your app’s NgModule.


...

import { RongCloudLibPlugin } from '@ionic-native/rongcloud';

...

@NgModule({
  ...

  providers: [
    ...
    RongCloudLibPlugin
    ...
  ]
  ...
})
export class AppModule { }

```

```
import { RongCloudLibPlugin } from '@ionic-native/rongcloud';

constructor(private rongcloud: RongCloudLibPlugin) { }

init(){
    this.rongcloud.init({appKey: "yourappKey"}).then((result)=>{
      if (result.status == 'success'){
        .....
      }
    });
}

connect(){
    this.rongcloud.connect({
      token: "yourtoken"
    }).then((ret)=>{

      alert( JSON.stringify(ret) );

    });
}

getCurrentUserId(){
    this.rongcloud.getCurrentUserId().then((ret)=>{
		alert( JSON.stringify(ret) );
	})
}

............

...


```

** RongCloud IMLib Plugin for Cordova： **

*⚠️⚠️  cordova-plugin-rongcloud-im-ionic2只是将cordova-plugin-rongcloud-im封装到ionic2的@ionic-native，更多的 API
可以查看 <a target="_blank" href="https://github.com/rongcloud/cordova-plugin-rongcloud-im" role="button">cordova-plugin-rongcloud-im</a>
，如有任何问题请到<a target="_blank" href="https://github.com/rongcloud/cordova-plugin-rongcloud-im" role="button">cordova-plugin-rongcloud-im</a>提交issues




