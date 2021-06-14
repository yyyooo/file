//@ sourceURL=zhihu.js
$("<link>").attr({rel: "stylesheet", type: "text/css", href: "https://gofile/zhihu/zhihu.css"}).appendTo("head");

let pathname=window.location.pathname;
if($(".Card.TopstoryItem").length>0||$(".List-item.NotLoggedInTopstoryItem").length>0){
    //列表首页
    addCss("https://gofile/zhihu/zhihu-list.css");
}else if(pathname.startsWith("/question/")||pathname.startsWith("/zvideo/")||pathname.startsWith("/p/")){
    addCss("https://gofile/zhihu/zhihu-detail.css");

    //关闭登录对话框
    $(".Modal-closeButton").click();
}

function addCss(cssUrl){
    $("<link>").attr({rel: "stylesheet", type: "text/css", href: cssUrl}).appendTo("head");
}



