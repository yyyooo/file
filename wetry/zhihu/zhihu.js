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

    repeat(() => {
        jQuery('[role="combobox"]').addClass('notranslate');
    }, () => {
        return jQuery('[role="combobox"]').hasClass("notranslate")
    })

    jQuery('.Login-socialLogin').parent().append(
        '<div style="color: grey;padding: 0 24px;">' +
        '由于知乎限制部分非中国手机号的注册，<br/><br/>' +
        '最好通过Wechat或者Weibo登录.<br/><br/><br/>' +
        '或者用你的中国、香港、澳门手机号注册登录。<br/>' +
        '</div>');
}


