//@ sourceURL=google.js

function toCn(src, from, translator) {
    if (translator == null || translator == "google") {
        window.location.href = "https://translate.google.com.vn/?sl=" + from + "&tl=zh-CN&text=" + src;
        return;
    }

    window.location.href = "https://www.bing.com/translator?from=" + from + "&to=zh-Hans&text=" + src;
}

function fromCn(src, to, translator) {
    if (translator == null || translator == "google") {
        window.location.href = "https://translate.google.com.vn/?sl=zh-CN&tl=" + to + "&text=" + src;
        return;
    }

    window.location.href = "https://www.bing.com/translator?from=zh-Hans&to=" + to + "&text=" + src;
}

function getRlt(translator) {
    if (translator == null || translator == "google") {
        return jQuery("span[lang] span[jsaction*=mouseover]").text();
    }

    //bing 翻译

}