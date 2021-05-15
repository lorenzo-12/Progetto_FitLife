function regSwitch(){
    const logForm = $("#login-form");
    const regForm = $("#register-form");
    const btnBack = $("#btnBack");

    btnBack.css("left","50%");
    logForm.fadeOut("slow");
    logForm.css("display","none");
    regForm.fadeIn("slow");
    regForm.css("display","flex");
}

function logSwitch(){
    const logForm = $("#login-form");
    const regForm = $("#register-form");
    const btnBack = $("#btnBack");

    btnBack.css("left","0");
    regForm.fadeOut("slow");
    regForm.css("display","none");
    logForm.fadeIn("slow");
    logForm.css("display","flex");
}
