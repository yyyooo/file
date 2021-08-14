//@ sourceURL=common.js

doInit();

var custom_cookie_prefix = "mapp_";

function doInit() {
    let redirectUrl = Cookies.get(custom_cookie_prefix + 'redirect');
    if (!isEmpty(redirectUrl)) {
        removeCookie(custom_cookie_prefix + "redirect");
        window.location.replace(redirectUrl);
        return;
    }

    repeat(() => unregisterSw());
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
    renameCooke(name, custom_cookie_prefix + name, domain);
}

function showCookie(name) {
    renameCooke(custom_cookie_prefix + name, name, domain);
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

function repeat(r, until) {
    if (until && until()) {
        return;
    }

    r();
    setTimeout(() => repeat(r, until), 1000);
}