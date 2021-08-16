//@ sourceURL=zhihu.js

zhihuInit();

function zhihuInit() {
    $(".MobileAppHeader-downloadLink").attr("href", "https://www.zhihu.com/search");
    $(".MobileAppHeader-downloadLink").text("搜索");

    $("<link>").attr({rel: "stylesheet", type: "text/css", href: GO_FILE_PREFIX + "zhihu/zhihu.css"}).appendTo("head");

    let pathname = window.location.pathname;
    if (pathname.startsWith("/people/")) {
        $("meta[name='viewport']").attr("content", "width=device-width,initial-scale=0.35,maximum-scale=5");
    } else {
        $("meta[name='viewport']").attr("content", "width=device-width,initial-scale=0.85,maximum-scale=5");
    }


    if ($(".Card.TopstoryItem").length > 0 || $(".List-item.NotLoggedInTopstoryItem").length > 0) {
        //列表首页
        addCss(GO_FILE_PREFIX + "zhihu/zhihu-list.css");
        return;
    }

    if (pathname.startsWith("/question/") || pathname.startsWith("/zvideo/") || pathname.startsWith("/p/")) {
        addCss(GO_FILE_PREFIX + "zhihu/zhihu-detail.css");

        //关闭登录对话框
        $(".Modal-closeButton").click();
        return;
    }

    if (pathname.startsWith("/signin")) {
        repeat(() => {
            $(".MobileSMSIdentify-content span").addClass('notranslate');
        }, () => {
            return $(".MobileSMSIdentify-content span").hasClass("notranslate")
        })

        return;
    }
}


