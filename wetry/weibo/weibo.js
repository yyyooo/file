//@ sourceURL=weibo.js

let href = window.location.href;
if (href.startsWith("https://m.weibo.cn/login")) {
    window.location.href = "https://weibo.com/login.php";
}




