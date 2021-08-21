//@ sourceURL=weibo.js

weiboInit();

function weiboInit() {
    addCss(GO_FILE_PREFIX + "weibo/weibo.css");

    let pathname = window.location.pathname;
    if (pathname.startsWith("/iforgot/choose")) {
        //手机号无需翻译
        $('.checkPhone').addClass('notranslate');
        return;
    }

    if (window.location.href == "https://m.weibo.cn/") {
        repeat(() => {
                if ($("#app .empty_failed").length > 0) {
                    window.location.replace("https://m.weibo.cn/");
                    return;
                }
            }, () => $(".weibo-text").length > 0
        )

        repeat(() => hideCookie('_T_WM'), () => $(".lite-iconf-profile").length > 0);
        $('.login-btn').click(() => {
            // window.location.href = "https://m.weibo.cn/login";
            window.location.href = "https://weibo.com/login.php";
        });
    }

    dealLoginPage();
    dealPcLoginPage();
}

function dealPcLoginPage() {
    if (window.location.href != "https://weibo.com/login.php") {
        return;
    }

    setTimeout(() => showCookie('_T_WM'));
    addCss(GO_FILE_PREFIX + "weibo/weibo-login-pc.css");
    $("meta[name='viewport']").attr("content", "width=device-width,initial-scale=0.7,maximum-scale=5");

    clickByDoc('[node-type="loginBtn"]');
}

function checkLoginPage() {
    if ($('.lite-iconf-profile').length > 0) {
        return;
    }

    let href = window.location.href;
    if (href === "https://m.weibo.cn/") {
        setTimeout(() => {
            if (isLoginPage()) {
                window.location.replace("https://m.weibo.cn/login");
            } else {
                checkLoginPage()
            }
        }, 1000);
    }
}

function dealLoginPage() {
    if (!isLoginPage()) {
        return;
    }

    addCss(GO_FILE_PREFIX + "weibo/weibo-login.css");
    setTimeout(() => showCookie('_T_WM'), 1500);

    //手机号无需翻译
    $('.code-text').addClass('notranslate');

    $('.code-text').click(() => mouseDownByDoc(".box-select"));
    $('.select-icon').click(() => mouseDownByDoc(".box-select"));
}

function isLoginPage() {
    return window.location.href.startsWith("https://m.weibo.cn/login") || $(".verify-box").length > 0;
}







