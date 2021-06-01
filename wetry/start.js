//@ sourceURL=start.js

Cookies.set('googtrans',"/auto/vi");

$("<div>").attr({id: "google_translate_element",style: "display: none;"}).appendTo("body");
//$("<meta>").attr({"http-equiv": "Content-Security-Policy",content: "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'"}).appendTo("head");

$("<link>").attr({rel: "stylesheet", type: "text/css", href: "https://gofile/a0.css"}).appendTo("head");
$("<link>").attr({rel: "stylesheet", type: "text/css", href: "https://gofile/b0.css"}).appendTo("head");
$("<link>").attr({rel: "stylesheet", type: "text/css", href: "https://gofile/b1.css"}).appendTo("head");

$("<script>").attr({src: "https://gofile/a0.js"}).appendTo("body");
$("<script>").attr({src: "https://gofile/b0.js"}).appendTo("body");
$("<script>").attr({src: "https://gofile/b1.js"}).appendTo("body");
$("<script>").attr({src: "https://gofile/b2.js"}).appendTo("body");


