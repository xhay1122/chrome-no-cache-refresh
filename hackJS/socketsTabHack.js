/**
 * 动态插入js代码
 * chrome tab 需要使用append script形势
 * Created by hai.xiong on 2019/1/4.
 */

(function () {
    const _hackJSText = `
    // 点击 Close idle sockets 和 Flush socket pools 按钮
    ;(function(){
        console.log('======hack.js start run======');
        window.g_browser.sendCloseIdleSockets();
        window.g_browser.sendFlushSocketPools();
        // 新打开的页面自动关闭
        window.close();
        console.log('======hack.js run finish======');
    })();
    `;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = _hackJSText;

    document.body.appendChild(script);
})();