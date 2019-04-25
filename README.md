## 介绍
解决切换host之后，chrome不能立即生效的问题。

这时候只要点一下插件就能立即对浏览器生效，并能够自动刷新当前页面。

## 安装教程

### 方式1：chrome 网上应用店

开启权限：

打开 chrome://flags/#extensions-on-chrome-urls ；

设置Extensions on chrome:// URLs选项为Enabled；

根据提示重启浏览器。

[安装地址 地址](https://chrome.google.com/webstore/detail/chrome-no-cache-refresh/cjbabfkaicdfoahaabkheejnkbomdogk)

### 方式2：手动安装

1、启动chrome权限

    打开 chrome://flags/#extensions-on-chrome-urls ；

    设置Extensions on chrome:// URLs选项为Enabled；

    然后根据提示重启浏览器。

2、下载插件

    # 克隆或直接下载源代码

    git clone https://github.com/xhay1122/chrome-no-cache-refresh.git

3、安装插件

    打开 chrome://extensions/ ;

    右上角 开启开发者模式;

    点击 加载已解压的扩展程序， 选择第二步下载的文件目录；

    安装完成。


## 使用方法

点击扩展程序栏的图标，自动刷新当前页面

## 实现原理

打开 chrome://net-internals/#sockets 设置页面，执行 Flush socket pools 按钮相关事件。

## 常见问题

。。。

## TODO

。。。
