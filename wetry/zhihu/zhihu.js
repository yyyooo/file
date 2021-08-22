//@ sourceURL=zhihu.js

zhihuInit();

function zhihuInit() {
    jQuery(".MobileAppHeader-downloadLink").attr("href", "https://www.zhihu.com/search");
    jQuery(".MobileAppHeader-downloadLink").text("搜索");

    jQuery("<link>").attr({rel: "stylesheet", type: "text/css", href: GO_FILE_PREFIX + "zhihu/zhihu.css"}).appendTo("head");

    let pathname = window.location.pathname;
    if (pathname.startsWith("/people/")) {
        jQuery("meta[name='viewport']").attr("content", "width=device-width,initial-scale=0.35,maximum-scale=5");
    } else {
        jQuery("meta[name='viewport']").attr("content", "width=device-width,initial-scale=0.85,maximum-scale=5");
    }


    if (jQuery(".Card.TopstoryItem").length > 0 || jQuery(".List-item.NotLoggedInTopstoryItem").length > 0) {
        //列表首页
        addCss(GO_FILE_PREFIX + "zhihu/zhihu-list.css");
        return;
    }

    if (pathname.startsWith("/question/") || pathname.startsWith("/zvideo/") || pathname.startsWith("/p/")) {
        addCss(GO_FILE_PREFIX + "zhihu/zhihu-detail.css");

        //关闭登录对话框
        jQuery(".Modal-closeButton").click();
        return;
    }

    if (pathname.startsWith("/signin")) {
        repeat(() => {
            jQuery(".MobileSMSIdentify-content span").addClass('notranslate');
        }, () => {
            return jQuery(".MobileSMSIdentify-content span").hasClass("notranslate")
        })

        return;
    }
}


