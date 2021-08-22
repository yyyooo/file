//@ sourceURL=google.js

function toCn(){
    return jQuery("span[lang=zh-CN] span[jsaction*=mouseover]").text();
}

function toVi(){
    return jQuery("span[lang=vi] span[jsaction*=mouseover]").text();
}

function getRlt(){
    return jQuery("span[lang] span[jsaction*=mouseover]").text();
}