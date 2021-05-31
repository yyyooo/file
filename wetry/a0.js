//@ sourceURL=a0.js
function googleTranslateElementInit() {
	new google.translate.TranslateElement({autoDisplay:false,includedLanguages:'vi'}, 'google_translate_element');
}

    function translateSwitch(){
    if(Cookies.get('googtrans')==undefined){
        $("[id=':1.container']").contents().find("[id=':1.confirm']").click();
    }else{
        Cookies.remove('googtrans');
        $("[id=':1.container']").contents().find("[id=':1.restore']").click();
    }
}

function runAsync(f){
	setTimeout(f,500);
}