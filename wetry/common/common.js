//@ sourceURL=common.js

doInit();

function doInit() {
    let redirectUrl = Cookies.get('mapp_redirect');
    if (!isEmpty(redirectUrl)) {
        Cookies.remove("mapp_redirect");
        window.location.replace(redirectUrl);
        return;
    }

    unregisterSw();
}

function isEmpty(obj) {
    return typeof obj === 'undefined' || obj == null || obj === '';
}

function addCss(cssUrl) {
    $("<link>").attr({rel: "stylesheet", type: "text/css", href: cssUrl}).appendTo("head");
}

function unregisterSw() {
    if (!('serviceWorker' in navigator)) {
        return;
    }

    let serviceWorker = navigator.serviceWorker;
    serviceWorker.getRegistrations ? serviceWorker.getRegistrations().then(function (sws) {
        sws.forEach(function (sw) {
            sw.unregister();
        });
    }) : serviceWorker.getRegistration && serviceWorker.getRegistration().then(function (sw) {
        sw && sw.unregister();
    });
}