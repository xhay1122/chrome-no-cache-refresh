/**
 * Created by hai.xiong on 2019/1/4.
 */

const socketsTabUrl = 'chrome://net-internals/#sockets';

chrome.browserAction.onClicked.addListener(function (currentTab) {

    // 打开网络设置tab
    chrome.tabs.create({url: socketsTabUrl, active: false}, function (tab) {

        // 执行网络设置hack js
        chrome.tabs.executeScript(tab.id, {file: "hackJS/socketsTabHack.js"});

        // 执行 刷新当前页面hack js
        if (currentTab.url !== socketsTabUrl) {
            chrome.tabs.executeScript(currentTab.id, {file: "hackJS/refreshPageHack.js"});
        }

        // 刷新提示
        // chrome.notifications.create('', {
        //     title: '刷新',
        //     type: 'basic',
        //     message: '页面正在刷新...',
        //     iconUrl: 'img/iconx128.png'
        // })
    });

});