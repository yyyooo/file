//@ sourceURL=start.js

modifyCookies();

jQuery("<div>").attr({id: "google_translate_element", style: "display: none;"}).appendTo("body");
//jQuery("<meta>").attr({"http-equiv": "Content-Security-Policy",content: "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'"}).appendTo("head");

addGoFileCss("a0.css");

jQuery("<script>").attr({src: GO_FILE_PREFIX + "a0.js"}).appendTo("body");

function modifyCookies() {
    removeCookie('googtrans');

    Cookies.set('googtrans', "/auto/" + Cookies.get(CUSTOM_COOKIE_PREFIX + 'language'));
}



