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
        $('.login-btn').text("扫码登录/注册")
        $('.login-btn').click(() => {
            window.location.href = "https://weibo.com/login.php";
        });
    }

    dealLoginPage();
    dealPcLoginPage();
}

function dealPcLoginPage() {
    let pathname = window.location.pathname;
    if (pathname != "/login.php" && pathname != "/login.php/") {
        return;
    }

    showCookie('_T_WM')
    addCss(GO_FILE_PREFIX + "weibo/weibo-login-pc.css");
    $("meta[name='viewport']").attr("content", "width=device-width,initial-scale=0.6,maximum-scale=5");


    repeat(() => {
        if ($('[node-type="loginBtn"]').length <= 0) {
            return;
        }

        clickByDoc('[node-type="loginBtn"]');
    }, () => $('.tab_bar [node-type="qrcode_tab"]').length > 0, 300)

    repeat(() => {
        if ($('.tab_bar [node-type="qrcode_tab"]').length <= 0) {
            return;
        }

        clickByDoc('.tab_bar [node-type="qrcode_tab"]');
    }, () => {
        let src = $('.qrcode_con img').attr("src");
        if (!(src && src.indexOf("//") > -1)) {
            return false;
        }

        $('.W_tc').html('<u><a href="https://m.weibo.cn/login" style="color: grey;font-size: x-large;">短信注册登录</a></u>');
        return true;
    }, 300)
}

function checkLoginPage() {
    if ($('.lite-iconf-profile').length > 0) {
        return;
    }

    let href = window.location.href;
    if (href === "https://m.weibo.cn/") {
        myDelay(() => {
            if (isLoginPage()) {
                window.location.replace("https://m.weibo.cn/login");
            } else {
                checkLoginPage()
            }
        });
    }
}

function dealLoginPage() {
    if (!isLoginPage()) {
        return;
    }

    addCss(GO_FILE_PREFIX + "weibo/weibo-login.css");
    myDelay(() => showCookie('_T_WM'), 1500);

    //手机号无需翻译
    $('.code-text').addClass('notranslate');

    $('.code-text').click(() => mouseDownByDoc(".box-select"));
    $('.select-icon').click(() => mouseDownByDoc(".box-select"));

    $('.box-center a').attr('href', 'https://weibo.com/login.php');
    $('.box-center a').text('微博扫码登录');

    $('.box-bottom').attr('style', 'color: grey;')
    $('.box-bottom').html('由于微博限制部分海外手机号的注册，<br/><br/>' +
        '建议先安装注册Wechat app，<br/><br/>' +
        '然后在微博官方app以Wechat方式登录，<br/><br/>' +
        '最后在Wetry app 上进行扫码登录。<br/><br/>' +
        '或者使用中国，香港，澳门手机注册登录。<br/><br/><br/>');
}

function isLoginPage() {
    return window.location.href.startsWith("https://m.weibo.cn/login") || $(".verify-box").length > 0;
}







