//@ sourceURL=weibo.js

weiboInit();

function weiboInit() {
    if (jQuery('[action-type="new_pc_apply"]').length > 0) {
        repeat(() => {
            clickByDoc('[action-type="new_pc_apply"]');
        }, () => jQuery('[action-type="new_pc_apply"]').length <= 0, 300);
        return;
    }

    dealCommon();
    dealH5Index();
    dealH5LoginPage();
    dealPcLoginPage();
    dealForget();
}

function dealCommon() {
    if (!window.location.host.endsWith("weibo.com")) {
        addGoFileCss("weibo/weibo.css");
        return;
    }

    if (window.location.href.startsWith("https://api.weibo.com/chat")) {
        jQuery("meta[name='viewport']").attr("content", "width=device-width,initial-scale=0.45,maximum-scale=0.45");
        return;
    }

    dealPc();
}

function dealPc() {
    jQuery("meta[name='viewport']").attr("content", "width=device-width,initial-scale=0.7,maximum-scale=5");
    addGoFileCss("weibo/weibo-pc.css");

    let logo = jQuery('[class*="Frame_top_"] a[class*="Nav_logo"]');
    let logoParent = logo.parent();
    logoParent.prepend('<svg id="mMenuBtn" focusable="false" viewBox="0 0 24 24" style="width: 35px;"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>');
    logo.remove();

    myDelay(() => jQuery('[class*="Frame_side"]').attr("style", "display: none;"));

    jQuery('#mMenuBtn').click(() => {
        let sideMenu = jQuery('[class*="Frame_side"]');
        if (sideMenu.attr("style")) {
            sideMenu.attr("style", null);
        } else {
            sideMenu.attr("style", "display: none;");
        }
    })

    /*新主题对话框*/
    repeat(() => {
        let dialogs = jQuery('#app > .woo-box-alignCenter');
        if (dialogs.length <= 0) {
            return;
        }


        for (let i = 0; i < dialogs.length; i++) {
            if (jQuery(dialogs[i]).text().indexOf("欢迎使用全新") < 0) {
                continue;
            }

            jQuery(dialogs[i]).find(".woo-button-main").parent().click();
            // clickByJQElement(jQuery(dialogs[i]).find(".woo-button-main"));
        }
    });

    //    图片预览
    repeat(() => {
        let view = jQuery('[class*="Viewer_container_"]');
        if (view.length <= 0) {
            return;
        }

        let right = jQuery('[class*="Frame_right_"]');
        if (right.hasClass("myHide")) {
            return;
        }
        right.addClass("myHide");

        let img = view.find('.imgInstance img');
        img.css("width", "100%");
        img.css("height", "auto");

        view.css("min-width", "0");
        view.parent().css("min-width", "0");
        view.parent().parent().css("min-width", "0");
    });
}

function dealH5Index() {
    if (window.location.href != "https://m.weibo.cn/") {
        return;
    }

    jQuery('.nav_item > li:nth-child(6) span').click();

    repeat(() => {
            if (jQuery("#app .empty_failed").length > 0) {
                removeCookie('_T_WM');
                window.location.replace("https://m.weibo.cn/");
                return;
            }
        }
    );

    repeat(() => {
        if (jQuery('#mLoginBtn').length > 0) {
            return;
        }

        jQuery('.login-btn').attr("id", "mLoginBtn");
        jQuery('.login-btn').text("扫码登录/注册")
        jQuery('.login-btn').click(() => {
            window.location.href = "https://weibo.com/login.php";
        });
    });
}

function dealPcLoginPage() {
    if (!window.location.href.startsWith("https://weibo.com") || jQuery('[node-type="loginBtn"]').length <= 0) {
        return;
    }

    if (Cookies.get('SSOLoginState')) {
        removeCookie('SSOLoginState');
        window.location.replace("https://m.weibo.cn");
        return;
    }

    jQuery("meta[name='viewport']").attr("content", "width=device-width,initial-scale=0.6,maximum-scale=5");

    addGoFileCss("weibo/weibo-login-pc.css");

    repeat(() => {
        let qrcodeErr = jQuery('[node-type="qrcode_err"]');
        if (qrcodeErr.length <= 0) {
            return;
        }

        let style = qrcodeErr.attr("style");
        if (!style || style.indexOf("display:none") < 0) {
            window.location.reload();
        }
    })

    repeat(() => {
        if (jQuery('[node-type="loginBtn"]').length <= 0) {
            return;
        }

        clickByDoc('[node-type="loginBtn"]');
    }, () => jQuery('.tab_bar [node-type="qrcode_tab"]').length > 0, 300)

    repeat(() => {
        if (jQuery('.tab_bar [node-type="qrcode_tab"]').length <= 0) {
            return;
        }

        clickByDoc('.tab_bar [node-type="qrcode_tab"]');
    }, () => {
        let src = jQuery('.qrcode_con img').attr("src");
        if (!(src && src.indexOf("//") > -1)) {
            return false;
        }

        jQuery('.W_tc').html('<br/><br/><u><a href="https://m.weibo.cn/login" style="color: #175199;font-size: x-large;">短信注册登录</a></u>');
        jQuery('.W_tc').prepend('<div style="color: grey;text-align: start;font-size: small;">' +
            '如果Wetry app和Weibo app在同一部手机上打开，<br/>' +
            '先把Wetry app的二维码截图，<br/>' +
            '然后当你打开Weibo app并扫描二维码时，<br/>' +
            '选择图库中的二维码截图进行扫码。<br/>' +
            '<u><a style="color:#175199" href="https://yyyooo.github.io/wetry%20vi/Wetry-Ch%C3%A0o-th%E1%BA%BF-gi%E1%BB%9Bi!/">查看更多注册登录教程<span class="notranslate">(https://yyyooo.github.io/pages/wetry/vi/list/)</span></a></u></div>')
        return true;
    }, 300)
}

function checkLoginPage() {
    if (jQuery('.lite-iconf-profile').length > 0) {
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
    jQuery('.checkPhone').addClass('notranslate');
}

function dealH5LoginPage() {
    if (!isLoginPage()) {
        return;
    }

    addGoFileCss("weibo/weibo-login.css");

    //手机号无需翻译
    jQuery('.code-text').addClass('notranslate');

    jQuery('.code-text').click(() => mouseDownByDoc(".box-select"));
    jQuery('.select-icon').click(() => mouseDownByDoc(".box-select"));

    jQuery('.box-center a').attr('href', 'https://weibo.com/login.php');
    jQuery('.box-center a').text('通过微博app扫码登录');
    jQuery('.box-bottom').attr('style', 'font-size: large;')

    jQuery('.box-bottom').attr('style', 'color: grey;')
    jQuery('.box-bottom').html(
        '最好通过微博app扫码登录，<br/><br/>' +
        '而微博app建议通过Wechat登录，<br/><br/>' +
        '因为Wechat支持海外手机注册。<br/><br/>' +
        '<u><a style="color:#175199" href="https://yyyooo.github.io/wetry%20vi/Wetry-Ch%C3%A0o-th%E1%BA%BF-gi%E1%BB%9Bi!/">查看更多注册登录教程<span class="notranslate">(https://yyyooo.github.io/pages/wetry/vi/list/)</span></a></u>');
}

function isLoginPage() {
    return window.location.href.startsWith("https://m.weibo.cn/login") || jQuery(".verify-box").length > 0;
}







