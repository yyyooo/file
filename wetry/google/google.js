//@ sourceURL=google.js

function toCn(){
    return $("span[lang=zh-CN] span[jsaction*=mouseover]").text();
}

function toVi(){
    return $("span[lang=vi] span[jsaction*=mouseover]").text();
}