//@ sourceURL=weibo.js

addCss("https://gofile/weibo/weibo.css");

    let href = window.location.href;
if (href.startsWith("https://m.weibo.cn/login") || $(".verify-box").length > 0) {
    window.location.replace("https://passport.weibo.cn/signin/login");
}else{
    if (window.location.pathname.startsWith("/iforgot/choose")){
        //手机号无需翻译
        $('.checkPhone').addClass('notranslate');
    }

}




