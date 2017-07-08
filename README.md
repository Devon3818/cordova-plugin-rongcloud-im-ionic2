# cordova-plugin-rongcloud-im

This is a [Cordova](http://cordova.apache.org/) plugin for RongCloud IMLib.For more detailed information about underlying business processes  please refer to [Android Development Guide](http://www.rongcloud.cn/docs/cordova.html).

# Install

To add the plugin to your Cordova project, simply add the plugin from the npm registry:

    cordova plugin add cordova-plugin-rongcloud-im

Alternatively, you can install the latest version of the plugin directly from git:

    cordova plugin add https://github.com/rongcloud/cordova-plugin-rongcloud-im

# Usage

The plugin is available via a global variable named `RongCloudLibPlugin`. It exposes the following properties and functions.

All functions accept optional success and failure callbacks as their final two arguments, where the failure callback will receive an error string as an argument unless otherwise noted.

## Demo

[https://github.com/rongcloud/cordova-plugin-rongcloud-im-demo](https://github.com/rongcloud/cordova-plugin-rongcloud-im-demo)

## 概述

融云 RongCloud 是国内首家专业的即时通讯云服务提供商，专注为互联网、移动互联网开发者提供即时通讯基础能力和云端服务。通过融云平台，开发者不必搭建服务端硬件环境，就可以将即时通讯、实时网络能力快速集成至应用中。

`cordova-plugin-rongcloud-im` 封装了融云即时通讯能力库 `IMLib SDK` 的 API，对融云的相关接口做了一一对应的封装，功能详情可参考目录。

使用 `cordova-plugin-rongcloud-im` 模块之前，请先 [注册](https://developer.rongcloud.cn/signup) 融云的开发者帐号并申请创建 App，创建 App 后，可以在 [开发者后台](https://developer.rongcloud.cn) 获取 `App Key` 和 `App Secret` 用于开发。

开发前请先认真阅读相关的 [融云开发文档和视频](http://docs.rongcloud.cn)。

** Cordova 平台相关开源代码： **

* 支持 Cordova 平台的融云 IMLib Plugin 源代码：<a target="_blank" href="https://github.com/rongcloud/cordova-plugin-rongcloud-im" role="button">RongCloud IMLib Plugin for Cordova</a>
* 融云 Cordova 的 Demo 演示源码：<a target="_blank" href="https://github.com/rongcloud/cordova-plugin-rongcloud-im-demo" role="button">Demo of RongCloud IMLib Plugin for Cordova</a>


