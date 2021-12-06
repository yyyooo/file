//@ sourceURL=common.js

var CUSTOM_COOKIE_PREFIX = "mapp_";
var RENAME_COOKIE_PREFIX = "mrename_";
var GO_FILE_PREFIX = "https://gofile.com/gofile/" + new Date().getTime() + "/";

commonInit();

function commonInit() {
    $.noConflict();

    let redirectUrl = Cookies.get(CUSTOM_COOKIE_PREFIX + 'redirect');
    if (!isEmpty(redirectUrl)) {
        removeCookie(CUSTOM_COOKIE_PREFIX + "redirect");
        window.location.replace(redirectUrl);
        return;
    }

    repeat(() => unregisterSw());

    dealQQLogin();
}

function isEmpty(obj) {
    return typeof obj === 'undefined' || obj == null || obj === '';
}

function addGoFileCss(cssUrl) {
    jQuery("<link>").attr({rel: "stylesheet", type: "text/css", href: GO_FILE_PREFIX + cssUrl}).appendTo("head");
}

function addCss(cssUrl) {
    jQuery("<link>").attr({rel: "stylesheet", type: "text/css", href: cssUrl}).appendTo("head");
}

function clickByJQElement(e) {
    e[0].dispatchEvent(newClickEvent())
}

function clickByDoc(selector) {
    jQuery(selector)[0].dispatchEvent(newClickEvent())
}

function newClickEvent() {
    let event = document.createEvent('HTMLEvents');
    event.initEvent('click', true, true);
    return event;
}

function mouseDownByDoc(selector) {
    let event = document.createEvent('MouseEvents');
    event.initMouseEvent('mousedown', true, true, window);
    jQuery(selector)[0].dispatchEvent(event)
}

function unregisterSw() {
    if (!('serviceWorker' in navigator)) {
        return;
    }

    let serviceWorker = navigator.serviceWorker;
    serviceWorker.getRegistrations ? serviceWorker.getRegistrations().then(function (sws) {
        let rlts = [];
        sws.forEach(function (sw) {
            rlts.push(sw.unregister());
        });

        Promise.all(rlts).then(() => afterUnregisterSw());
    }) : serviceWorker.getRegistration && serviceWorker.getRegistration().then(function (sw) {
        sw && sw.unregister().then(() => afterUnregisterSw());
    });
}

function afterUnregisterSw() {
    caches.keys().then(keys => {
        keys.forEach(key => {
            caches.delete(key);
        })
    });
}

function hideCookie(name, domain) {
    renameCooke(name, RENAME_COOKIE_PREFIX + name, domain);
}

function showCookie(name, domain) {
    renameCooke(RENAME_COOKIE_PREFIX + name, name, domain);
}

function renameCooke(fromName, toName, domain) {
    let cookie = Cookies.get(fromName);
    if (!cookie) {
        return;
    }

    removeCookie(fromName);
    if (domain) {
        Cookies.set(toName, cookie, {domain: domain});
    } else {
        Cookies.set(toName, cookie);
    }
}

function removeCookie(name) {
    Cookies.remove(name);

    let hosts = window.location.host.split(".");
    for (let i = 0; i < hosts.length - 1; i++) {
        let ancestorDomain = hosts.slice(i).join(".");
        Cookies.remove(name, {domain: ancestorDomain})
    }
}

function repeat(r, until, interval) {
    if (until && until()) {
        return;
    }

    r();

    if (!interval) {
        interval = 1000;
    }
    setTimeout(() => repeat(r, until), interval);
}

function myDelay(r, delay) {
    if (!delay) {
        delay = 1000;
    }

    setTimeout(r, delay);
}

function dealQQLogin() {
    if (!window.location.href.startsWith("https://graph.qq.com/oauth")) {
        return;
    }

    jQuery("meta[name='viewport']").attr("content", "width=device-width,initial-scale=0.75,maximum-scale=5,user-scalable=true");
}