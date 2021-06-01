//FUNZIONE PER CONTROLLO LOGIN
function checkLog(){
    var u = localStorage.getItem("user");
    if(u!=null){
        $("#btn-login").text(u);
    }
    else{
        alert("Sorry, you are not logged in!")
        document.location.href = "../Login/index.html";
    }
}
checkLog();

function imgSwitch(){ //funzione per switchare da una img all'altra, relativamente all'uomo e alla donna
    const manImg = $("#man-container");
    const womanImg = $("#woman-container");
    $("#man-icon").on("click",() => {
        if(manImg.css("display")!="flex"){
            if(womanImg.css("display")=="flex"){
                $("#woman-icon").css("color","#f5f5f5");
                womanImg.css("display","none");
            } 
            $("#man-icon").css("color","#198754");
            womanImg.css("display","none");
            manImg.css("display","flex");
        }
        else{
            $("#man-icon").css("color","#f5f5f5");
            manImg.css("display","none");
        }
            
    })
    $("#woman-icon").on("click",() => {
        if(womanImg.css("display")!="flex"){
            if(manImg.css("display")=="flex"){
                $("#man-icon").css("color","#f5f5f5");
                manImg.css("display","none");
            }
            $("#woman-icon").css("color","#198754");
            manImg.css("display","none");
            womanImg.css("display","flex");
        }
        else{
            $("#woman-icon").css("color","#f5f5f5");
            womanImg.css("display","none");
        }
            
    })
}

imgSwitch();

//Serve per collegare il click sul btn-muscolo al suo accordion item

function showAccordionItem(accordionItemString){
    accordionItemString = "[name='"+accordionItemString+"']";
    const accordionString = accordionItemString + " > h2 > button";

    if($("#accordion-container").css("display")!="block"){
        $("#accordion-container").css("display","block");
        $("#scheda").css("display","flex");
    }

    if($(accordionString).attr("aria-expanded")=="false"){
    // if(btn.name!="btn-petto"){
        
        $(accordionString).attr("aria-expanded","true");
        $(accordionString).removeClass("collapsed");
        $(accordionItemString+" > .accordion-collapse").addClass("show");
        //funzione per scrollare
        document.querySelector(accordionItemString).scrollIntoView({
            behavior: 'smooth'
        });
        
    }

    else{
        $(accordionString).addClass("collapsed");
        $(accordionString).attr("aria-expanded","false");
        $(accordionItemString+" > .accordion-collapse").removeClass("show");
    }
        

}

//Codice per aggiungere esercizi alla scheda quando checkati
function addExercise(checkbox,esercizio,sezione,index){
    const input = "[name='accordion-"+sezione+"']";
   
    const serie = esercizio + "serie";
    if(checkbox.checked){

        var reps = $(input+" > div > div > div > #c2 > .reps"+index).val();
        var sers = $(input+" > div > div > div > #c2 > .serie"+index).val();

        $("#lista-esercizi").append('<li id="'+esercizio+'"><h4>'+esercizio+'</h4></li>');
        $("#lista-serie").append('<li id="'+serie+'"><h4>'+reps+'X'+sers+'</h4></li>');
    }
    else{
        $("#"+esercizio).remove();
        $("#"+serie).remove();

    }
}


