//@ sourceURL=common.js

var CUSTOM_COOKIE_PREFIX = "mapp_";
var GO_FILE_PREFIX = "https://gofile/";

doInit();

function doInit() {
    let redirectUrl = Cookies.get(CUSTOM_COOKIE_PREFIX + 'redirect');
    if (!isEmpty(redirectUrl)) {
        removeCookie(CUSTOM_COOKIE_PREFIX + "redirect");
        window.location.replace(redirectUrl);
        return;
    }

    repeat(() => unregisterSw(), null, 2000);
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
        if (keys.length <= 0) {
            return;
        }

        let rlts = [];
        keys.forEach(key => {
            rlts.push(caches.delete(key));
        })

        Promise.all(rlts).then(() => {
            window.location.replace(window.location.href);
        })
    });
}

function hideCookie(name, domain) {
    renameCooke(name, CUSTOM_COOKIE_PREFIX + name, domain);
}

function showCookie(name, domain) {
    renameCooke(CUSTOM_COOKIE_PREFIX + name, name, domain);
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
    for (let i = 1; i < hosts.length - 1; i++) {
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