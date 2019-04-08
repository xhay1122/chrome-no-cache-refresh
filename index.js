/**
 * Created by hai.xiong on 2019/1/4.
 */

const socketsTabUrl = 'chrome://net-internals/#sockets';
const CmdLink = {
    clearHostCache: "document.getElementById('dns-view-clear-cache').click();",
    closeIdleSockets: "document.getElementById('sockets-view-close-idle-button').click();",
    flushSocketPools: "document.getElementById('sockets-view-flush-button').click();"
};

// 插入变量和脚本
function executeScriptWithArg(tab, arg, jsFile, callback) {
    chrome.tabs.executeScript(tab.id, {
        code: `const _cncrArg=${JSON.stringify(arg)}`
    }, function () {
        chrome.tabs.executeScript(tab.id, {
            file: jsFile
        }, callback);
    });
}

// 获取命令配置
function getOptions(callback) {
    chrome.storage.sync.get({
        autoRefreshPage: true,
        clearHostCache: true,
        closeIdleSockets: false,
        flushSocketPools: true
    }, function (items) {
        const cmds = [];
        // 找出可执行命令
        for (let k in items) {
            if (items[k] && CmdLink[k]) {
                cmds.push(CmdLink[k]);
            }
        }

        callback({
            cmds: cmds,
            autoRefreshPage: items.autoRefreshPage
        })
    });
}

chrome.browserAction.onClicked.addListener(function (currentTab) {

    // 打开网络设置tab
    chrome.tabs.create({url: socketsTabUrl, active: false}, function (netTab) {

        // 获取配置文件
        getOptions(function (res) {

            // 执行网络设置hack js
            executeScriptWithArg(netTab, res.cmds, "hackJS/socketsTabHack.js", function () {

                // 刷新当前页面
                if (res.autoRefreshPage && currentTab.url && currentTab.url !== socketsTabUrl) {
                    chrome.tabs.reload(currentTab.id);
                }
            });
        });

        // 刷新提示
        // chrome.notifications.create('', {
        //     title: '刷新',
        //     type: 'basic',
        //     message: '页面正在刷新中...',
        //     iconUrl: 'img/iconx128.png'
        // })
    });

});
