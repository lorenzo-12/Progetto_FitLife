
var coll_pesce = $(".collapse_pesce");
var coll_carne = $(".collapse_carne");
var coll_farina = $(".collapse_farina");
var coll_frutta = $(".collapse_frutta");


function show(str){
    if(str==1){
        if(coll_carne.css("display")=="flex"){
            coll_pesce.css("display","none");
            coll_carne.css("display","none");
            coll_farina.css("display","none");
            coll_frutta.css("display","none");
        }
        else{
            coll_carne.css("display","flex");
            coll_pesce.css("display","none");
            coll_farina.css("display","none");
            coll_frutta.css("display","none");
        }
    }
    if(str==2){
        if(coll_pesce.css("display")=="flex"){
            coll_carne.css("display","none");
            coll_pesce.css("display","none");
            coll_farina.css("display","none");
            coll_frutta.css("display","none");
        }
        else{
            coll_pesce.css("display","flex");
            coll_carne.css("display","none");
            coll_farina.css("display","none");
            coll_frutta.css("display","none");
        }
    }
    if(str==3){
        if(coll_farina.css("display")=="flex"){
            coll_carne.css("display","none");
            coll_pesce.css("display","none");
            coll_farina.css("display","none");
            coll_frutta.css("display","none");
        }
        else{
            coll_farina.css("display","flex");
            coll_carne.css("display","none");
            coll_pesce.css("display","none");
            coll_frutta.css("display","none");
        }
    } 
    if(str==4){
        if(coll_frutta.css("display")=="flex"){
            coll_carne.css("display","none");
            coll_pesce.css("display","none");
            coll_farina.css("display","none");
            coll_frutta.css("display","none");
        }
        else{
            coll_frutta.css("display","flex");
            coll_carne.css("display","none");
            coll_pesce.css("display","none");
            coll_farina.css("display","none");
        }
    }       
}



