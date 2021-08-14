//@ sourceURL=a0.js

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        autoDisplay: false,
        includedLanguages: Cookies.get(CUSTOM_COOKIE_PREFIX + 'language')
    }, 'google_translate_element');
}

function translateSwitch() {
    if (Cookies.get('googtrans') == undefined) {
        $("[id=':1.container']").contents().find("[id=':1.confirm']").click();
    } else {
        removeCookie('googtrans');
        $("[id=':1.container']").contents().find("[id=':1.restore']").click();
    }
}

$("<link>").attr({rel: "stylesheet", type: "text/css", href: GO_FILE_PREFIX + "b0.css"}).appendTo("head");
$("<link>").attr({rel: "stylesheet", type: "text/css", href: GO_FILE_PREFIX + "b1.css"}).appendTo("head");

$("<script>").attr({src: GO_FILE_PREFIX + "b0.js"}).appendTo("body");