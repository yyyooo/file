//@ sourceURL=start.js

modifyCookies();

$("<div>").attr({id: "google_translate_element", style: "display: none;"}).appendTo("body");
//$("<meta>").attr({"http-equiv": "Content-Security-Policy",content: "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'"}).appendTo("head");

$("<link>").attr({rel: "stylesheet", type: "text/css", href: "https://gofile/a0.css"}).appendTo("head");

$("<script>").attr({src: "https://gofile/a0.js"}).appendTo("body");

function modifyCookies() {
    let hosts = window.location.host.split(".");
    for (let i = 1; i < hosts.length - 1; i++) {
        let ancestorDomain = hosts.slice(i).join(".");
        Cookies.remove("googtrans", {domain: ancestorDomain})
    }

    Cookies.set('googtrans', "/auto/" + Cookies.get('mapp_language'));
}



