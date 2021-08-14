//@ sourceURL=start.js

modifyCookies();

$("<div>").attr({id: "google_translate_element", style: "display: none;"}).appendTo("body");
//$("<meta>").attr({"http-equiv": "Content-Security-Policy",content: "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'"}).appendTo("head");

$("<link>").attr({rel: "stylesheet", type: "text/css", href: GO_FILE_PREFIX + "a0.css"}).appendTo("head");

$("<script>").attr({src: GO_FILE_PREFIX + "a0.js"}).appendTo("body");

function modifyCookies() {
    removeCookie('googtrans');

    Cookies.set('googtrans', "/auto/" + Cookies.get(CUSTOM_COOKIE_PREFIX + 'language'));
}



