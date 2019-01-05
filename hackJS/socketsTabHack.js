/**
 * 动态插入js代码
 * chrome tab 需要使用append script形势
 * Created by hai.xiong on 2019/1/4.
 */

(function () {

    const _hackJSText = [];
    // 头部
    _hackJSText.push(`
        // 点击 Close idle sockets 和 Flush socket pools 按钮
        ;(function(){
            // 执行Chrome命令
    `);

    // 命令
    if (Array.isArray(_cncrArg)) {
        _cncrArg.map(function (cmd) {
            _hackJSText.push(`
                ${cmd};
            `)
        });
    }

    // 结尾
    _hackJSText.push(`
            // 新打开的页面自动关闭
            window.close();
        })();
    `);

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = _hackJSText.join('');

    document.body.appendChild(script);
})();