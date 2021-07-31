//@ sourceURL=weibo.js

addCss("https://gofile/weibo/weibo.css");

let href = window.location.href;
if (href.startsWith("https://m.weibo.cn/login") || $(".verify-box").length > 0) {
    //手机号无需翻译
    $('.code-text').addClass('notranslate');

    let expandSelect = () => {
        let event = document.createEvent('MouseEvents');
        event.initMouseEvent('mousedown', true, true, window);
        $(".box-select")[0].dispatchEvent(event)
    }
    $('.code-text').click(expandSelect);
    $('.select-icon').click(expandSelect);
} else if (window.location.pathname.startsWith("/iforgot/choose")) {
    //手机号无需翻译
    $('.checkPhone').addClass('notranslate');
}





