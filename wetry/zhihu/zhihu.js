//@ sourceURL=zhihu.js

$("<link>").attr({rel: "stylesheet", type: "text/css", href: GO_FILE_PREFIX + "zhihu/zhihu.css"}).appendTo("head");
$("meta[name='viewport']").attr("content", "width=device-width,initial-scale=0.5,maximum-scale=5");

let pathname = window.location.pathname;
if ($(".Card.TopstoryItem").length > 0 || $(".List-item.NotLoggedInTopstoryItem").length > 0) {
    //列表首页
    addCss(GO_FILE_PREFIX + "zhihu/zhihu-list.css");
} else if (pathname.startsWith("/question/") || pathname.startsWith("/zvideo/") || pathname.startsWith("/p/")) {
    addCss(GO_FILE_PREFIX + "zhihu/zhihu-detail.css");

    //关闭登录对话框
    $(".Modal-closeButton").click();
}

