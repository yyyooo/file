//@ sourceURL=zhihu.js

zhihuInit();

function zhihuInit() {
    dealCommon();

    dealHot();
    dealList();
    dealDetail();
    dealSignin();
    dealPwReset();
    dealShenSu();
}

function dealCommon() {
    jQuery("<link>").attr({
        rel: "stylesheet",
        type: "text/css",
        href: GO_FILE_PREFIX + "zhihu/zhihu.css"
    }).appendTo("head");

    let pathname = window.location.pathname;
    if (pathname.startsWith("/people/")) {
        jQuery("meta[name='viewport']").attr("content", "width=device-width,initial-scale=0.35,maximum-scale=5,user-scalable=yes");
    } else {
        jQuery("meta[name='viewport']").attr("content", "width=device-width,initial-scale=0.85,maximum-scale=5,user-scalable=yes");
    }
}

function dealHot() {
    if (!window.location.href.startsWith("https://www.zhihu.com/hot")) {
        return;
    }

    jQuery('.MobileAppHeader-actions').prepend('<a class="MobileAppHeader-navItem" href="https://www.zhihu.com/search">搜索</a>')
}


function dealList() {
    if (jQuery(".Card.TopstoryItem").length > 0 || jQuery(".List-item.NotLoggedInTopstoryItem").length > 0) {
        let actions = jQuery('.MobileAppHeader-actions');
        actions.prepend('<a class="MobileAppHeader-navItem" href="https://www.zhihu.com/hot">热门</a>')
        actions.prepend('<a class="MobileAppHeader-navItem" href="https://www.zhihu.com/search">搜索</a>')

        //列表首页
        addGoFileCss("zhihu/zhihu-list.css");
    }
}

function dealDetail() {
    let pathname = window.location.pathname;
    if (pathname.startsWith("/question/") || pathname.startsWith("/zvideo/") || pathname.startsWith("/p/")) {
        addGoFileCss("zhihu/zhihu-detail.css");

        //关闭登录对话框
        jQuery(".Modal-closeButton").click();
    }
}

function dealSignin() {
    let pathname = window.location.pathname;
    if (!pathname.startsWith("/signin")) {
        return;
    }

    addGoFileCss("zhihu/zhihu-login.css");

    jQuery('.SignContainer-inner').attr("translate", "no");
    repeat(() => {
        let box = jQuery('.SignFlow-account [role="combobox"]')
        if (box.attr("translate") == "no") {
            return;
        }

        jQuery('.SignFlow-smsInput .Input').attr("placeholder", "6位短信验证码");
        jQuery('.SignFlow-smsInputContainer + .Login-options').attr("translate", "no");
        box.attr("translate", "no");

        jQuery('.Login-content > *:not(.SignFlow-smsInputContainer + .Login-options) > *').attr("translate", "yes");
    })

    jQuery('.Login-socialButtonGroup .Zi--QQ').parent().remove();

    jQuery('.Login-socialLogin').parent().append(
        '<div style="color: grey;padding: 0 24px;">' +
        '由于知乎限制部分非中国手机号的注册，<br/><br/>' +
        '最好通过Wechat直接扫码登录（选取图片库扫码会登录失败），<br/><br/>' +
        '目前微博登录方式可能失败。<br/><br/>' +
        '<u><a style="color:#175199" href="https://yyyooo.github.io/wetry%20vi/Wetry-Ch%C3%A0o-th%E1%BA%BF-gi%E1%BB%9Bi!/">查看更多注册登录教程<span class="notranslate">(https://yyyooo.github.io/pages/wetry/vi/list/</span></a></u>)' +
        '</div>');
}

function dealPwReset() {
    if (!window.location.href.startsWith("https://www.zhihu.com/account/password_reset")) {
        return;
    }

    jQuery('.SignFlow-account').attr("translate", "no");
    repeat(() => {
        let box = jQuery('.SignFlow-account [role="combobox"]')
        if (box.attr("translate") == "no") {
            return;
        }

        box.attr("translate", "no");
        jQuery('.SignFlow-account > *').attr("translate", "yes");
    })

    jQuery('.PasswordReset-accountLink').attr("style", "bottom: -30px;");
}

function dealShenSu() {
    if (!window.location.href.startsWith("https://www.zhihu.com/account/appeal")) {
        return;
    }

    jQuery('.AccountInfo-main > form').attr("translate", "no");
    repeat(() => {
        let box = jQuery('.SignFlow-account [role="combobox"]')
        if (box.attr("translate") == "no") {
            return;
        }

        box.attr("translate", "no");
        jQuery('.AccountInfo-main > form > * > *').attr("translate", "yes");
    })

}
