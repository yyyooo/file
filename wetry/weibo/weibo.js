//@ sourceURL=weibo.js

let href = window.location.href;
if (href.startsWith("https://m.weibo.cn/login") || $(".verify-box").length > 0) {
    window.location.href = "https://weibo.com/login.php";
} else if (href.startsWith("https://weibo.com/login.php")) {
    $("[node-type='loginBtn']").click();
    addCss("https://gofile/weibo/weibo-login.css");
}

function addCss(cssUrl) {
    $("<link>").attr({rel: "stylesheet", type: "text/css", href: cssUrl}).appendTo("head");
}

