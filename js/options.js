/**
 * Created by hai.xiong on 2019/1/5.
 */

// 将选项保存在 chrome.storage 中。
function save_options() {
    let items = {};
    items.autoRefreshPage = document.getElementById('js-auto-reload').checked;
    items.clearHostCache = document.getElementById('js-host-cache').checked;
    items.closeIdleSockets = document.getElementById('js-idle-sockets').checked;
    items.flushSocketPools = document.getElementById('js-socket-pools').checked;

    chrome.storage.sync.set(items, function () {
        // 更新状态，告诉用户选项已保存。
        var status = document.getElementById('js-page-tip');
        status.textContent = '选项已保存！';
        setTimeout(function () {
            status.textContent = '';
        }, 1500);
    });
}

// 从保存在 chrome.storage 中的首选项恢复选择框和复选框状态。
function restore_options() {
    chrome.storage.sync.get({
        autoRefreshPage: true,
        clearHostCache: true,
        closeIdleSockets: false,
        flushSocketPools: true
    }, function (items) {
        document.getElementById('js-auto-reload').checked = items.autoRefreshPage;
        document.getElementById('js-host-cache').checked = items.clearHostCache;
        document.getElementById('js-idle-sockets').checked = items.closeIdleSockets;
        document.getElementById('js-socket-pools').checked = items.flushSocketPools;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('js-save').addEventListener('click',
    save_options);