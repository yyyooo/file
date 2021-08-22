//@ sourceURL=start.js

modifyCookies();

jQuery("<div>").attr({id: "google_translate_element", style: "display: none;"}).appendTo("body");
//jQuery("<meta>").attr({"http-equiv": "Content-Security-Policy",content: "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'"}).appendTo("head");

jQuery("<link>").attr({rel: "stylesheet", type: "text/css", href: GO_FILE_PREFIX + "a0.css"}).appendTo("head");

jQuery("<script>").attr({src: GO_FILE_PREFIX + "a0.js"}).appendTo("body");

function modifyCookies() {
    removeCookie('googtrans');

    Cookies.set('googtrans', "/auto/" + Cookies.get(CUSTOM_COOKIE_PREFIX + 'language'));
}



