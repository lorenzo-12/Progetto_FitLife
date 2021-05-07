function imgSwitch(){ //funzione per switchare da una img all'altra relativamente all'uomo e alla donna
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