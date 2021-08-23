//@ sourceURL=zhihu.js

zhihuInit();

function zhihuInit() {
    dealCommon();
    dealList();
    dealDetail();
    dealSignin();
}


function dealCommon() {
    jQuery(".MobileAppHeader-downloadLink").attr("href", "https://www.zhihu.com/search");
    jQuery(".MobileAppHeader-downloadLink").text("搜索");

    jQuery("<link>").attr({
        rel: "stylesheet",
        type: "text/css",
        href: GO_FILE_PREFIX + "zhihu/zhihu.css"
    }).appendTo("head");

    let pathname = window.location.pathname;
    if (pathname.startsWith("/people/")) {
        jQuery("meta[name='viewport']").attr("content", "width=device-width,initial-scale=0.35,maximum-scale=5");
    } else {
        jQuery("meta[name='viewport']").attr("content", "width=device-width,initial-scale=0.85,maximum-scale=5");
    }
}

function dealList() {
    if (jQuery(".Card.TopstoryItem").length > 0 || jQuery(".List-item.NotLoggedInTopstoryItem").length > 0) {
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

    let rewrite = () => {
        jQuery('.SignFlow-smsInput .Input').attr("placeholder", "6位短信验证码");
        jQuery('[role="combobox"]').addClass('notranslate');
    }

    rewrite.call();
    jQuery('.Login-content .SignFlow-tab').click(rewrite)

    jQuery('.Login-socialLogin').parent().append(
        '<div style="color: grey;padding: 0 24px;">' +
        '由于知乎限制部分非中国手机号的注册，<br/><br/>' +
        '最好通过Wechat直接扫码登录（选取图片库扫码会登录失败），<br/><br/>' +
        '目前微博登录方式可能失败。<br/><br/>' +
        '或者用你的中国、香港、澳门手机号在此页面注册登录。<br/>' +
        '</div>');
}


