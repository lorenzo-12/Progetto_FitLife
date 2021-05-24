//FUNZIONE PER CONTROLLARE SE è STATO ESEGUITO IL LOGIN
function checkLog(){
    $('#Exit-btn').attr('disabled', true);
    var u = localStorage.getItem("user");
    var email = localStorage.getItem("mail"); // PRENDO GLI ELEMENTI DAL LOCAL STORAGE (SE NON SONO NULL)
    var psw = localStorage.getItem("psw");
    if(u!=null){
        $("#btn-login").text(u); //SETTO LO USERNAME SUL BOTTONE 
        $('#Exit-btn').attr('disabled', false);
    }
    if(email!=null && psw!=null){//COMPILO IL LOGIN DATO CHE è STATO RICHIESTO CON IL REMEMBER ME
        $("#logInput-email").val(email);
        $("#logInput-psw").val(psw);
        
    }
}
checkLog();

function logout(){
    localStorage.removeItem("user");
    location.reload();
}

function regSwitch(){ //FUNZIONE PER SWITCHARE TRA REGISTRAZIONE E LOGIN
    const logForm = $("#login-form");
    const regForm = $("#register-form");
    const btnBack = $("#btnBack");

    btnBack.css("left","50%");
    logForm.fadeOut("slow");
    logForm.css("display","none");
    regForm.fadeIn("slow");
    regForm.css("display","flex");
}

function logSwitch(){//FUNZIONE PER SWITCHARE TRA LOGIN E REGISTRAZIONE
    const logForm = $("#login-form");
    const regForm = $("#register-form");
    const btnBack = $("#btnBack");

    btnBack.css("left","0");
    regForm.fadeOut("slow");
    regForm.css("display","none");
    logForm.fadeIn("slow");
    logForm.css("display","flex");
}

