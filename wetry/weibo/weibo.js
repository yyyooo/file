//@ sourceURL=weibo.js

addCss("https://gofile/weibo/weibo.css");

let href = window.location.href;
if (href.startsWith("https://m.weibo.cn/login") || $(".verify-box").length > 0) {
    window.location.href = "https://passport.weibo.cn/signin/login";
}

function addCss(cssUrl) {
    $("<link>").attr({rel: "stylesheet", type: "text/css", href: cssUrl}).appendTo("head");
}

