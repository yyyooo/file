//@ sourceURL=weibo.js

weiboInit();

function weiboInit() {
    if ($('[action-type="new_pc_apply"]').length > 0) {
        repeat(() => {
            clickByDoc('[action-type="new_pc_apply"]');
        }, () => $('[action-type="new_pc_apply"]').length <= 0, 300);
        return;
    }

    dealCommon();
    dealH5Index();
    dealH5LoginPage();
    dealPcLoginPage();
    dealForget();
}

function dealCommon() {
    if (!window.location.host.endsWith("weibo.com") || window.location.href.startsWith("https://weibo.com/login.php")) {
        addCss(GO_FILE_PREFIX + "weibo/weibo.css");
        return;
    }

    $("meta[name='viewport']").attr("content", "width=device-width,initial-scale=0.7,maximum-scale=5");
    addCss(GO_FILE_PREFIX + "weibo/weibo-pc.css");

    let logo = $('[class*="Frame_top_"] a[class*="Nav_logo"]');
    let logoParent = logo.parent();
    logoParent.prepend('<svg id="mMenuBtn" focusable="false" viewBox="0 0 24 24" style="width: 35px;"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>');
    logo.remove();

    $('[class*="Frame_side"]').attr("style", "display: none;");

    $('#mMenuBtn').click(() => {
        let sideMenu = $('[class*="Frame_side"]');
        if (sideMenu.attr("style")) {
            sideMenu.attr("style", null);
        } else {
            sideMenu.attr("style", "display: none;");
        }
    })
}

function dealH5Index() {
    if (window.location.href != "https://m.weibo.cn/") {
        return;
    }

    repeat(() => {
            if ($("#app .empty_failed").length > 0) {
                window.location.replace("https://m.weibo.cn/");
                return;
            }
        }, () => $(".weibo-text").length > 0
    )

    repeat(() => hideCookie('_T_WM'), () => $(".lite-iconf-profile").length > 0);

    repeat(() => {
        $('.login-btn').attr("id", "mLoginBtn");
        $('.login-btn').text("扫码登录/注册")
        $('.login-btn').click(() => {
            window.location.href = "https://weibo.com/login.php";
        });
    }, () => $('#mLoginBtn').length > 0);
}

function dealPcLoginPage() {
    let pathname = window.location.pathname;
    if (pathname != "/login.php" && pathname != "/login.php/") {
        return;
    }

    $("meta[name='viewport']").attr("content", "width=device-width,initial-scale=0.6,maximum-scale=5");

    showCookie('_T_WM')
    addCss(GO_FILE_PREFIX + "weibo/weibo-login-pc.css");

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

function dealForget() {
    let pathname = window.location.pathname;
    if (!pathname.startsWith("/iforgot/choose")) {
        return;
    }

    //手机号无需翻译
    $('.checkPhone').addClass('notranslate');
}

function dealH5LoginPage() {
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
    $('.box-center a').text('扫码登录微博');
    $('.box-bottom').attr('style', 'font-size: large;')

    $('.box-bottom').attr('style', 'color: grey;')
    $('.box-bottom').html('由于微博限制部分非中国手机号的注册，<br/><br/>' +
        '可以先安装注册Wechat app，<br/><br/>' +
        '然后在微博官方app以Wechat方式登录，<br/><br/>' +
        '最后在Wetry app 上进行扫码登录。<br/><br/><br/>' +
        '或者用你的中国、香港、澳门手机号注册登录。<br/><br/>');
}

function isLoginPage() {
    return window.location.href.startsWith("https://m.weibo.cn/login") || $(".verify-box").length > 0;
}







