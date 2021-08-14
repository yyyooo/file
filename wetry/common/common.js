//@ sourceURL=common.js

doInit();

function doInit() {
    let redirectUrl = Cookies.get('mapp_redirect');
    if (!isEmpty(redirectUrl)) {
        removeCookie("mapp_redirect");
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

        Promise.all(keys.map(key => {
            return caches.delete(key);
        })).then(() => {
            window.location.replace(window.location.href);
        })
    });
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