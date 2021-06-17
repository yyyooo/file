//@ sourceURL=common.js

let redirectUrl = Cookies.get('mapp_redirect');
if (!isEmpty(redirectUrl)) {
    window.location.replace(redirectUrl);
}

function isEmpty(obj) {
    return typeof obj === 'undefined' || obj == null || obj === '';
}

