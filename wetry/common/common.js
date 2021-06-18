//@ sourceURL=common.js

let redirectUrl = Cookies.get('mapp_redirect');
if (!isEmpty(redirectUrl)) {
    Cookies.remove("mapp_redirect");
    window.location.replace(redirectUrl);
}

$("meta[name='viewport']").attr("content", "width=device-width,initial-scale=0.6,maximum-scale=5");

function isEmpty(obj) {
    return typeof obj === 'undefined' || obj == null || obj === '';
}

function addCss(cssUrl) {
    $("<link>").attr({rel: "stylesheet", type: "text/css", href: cssUrl}).appendTo("head");
}
