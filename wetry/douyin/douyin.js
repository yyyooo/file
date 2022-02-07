//@ sourceURL=zhihu.js

douyinInit();

function douyinInit() {
    dealCommon();
}

function dealCommon() {
    addGoFileCss("douyin/douyin.css");

    jQuery("meta[name='viewport']").attr("content", "width=device-width,initial-scale=0.5,maximum-scale=0.5,user-scalable=yes");
}

