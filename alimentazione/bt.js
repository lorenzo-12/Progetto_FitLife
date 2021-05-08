
var coll_pesce = $(".collapse_pesce");
var coll_carne = $(".collapse_carne")


function show(str){
    if(str==1){
        if(coll_carne.css("display")=="flex"){
            coll_pesce.css("display","none");
            coll_carne.css("display","none");
        }
        else{
            coll_carne.css("display","flex");
            coll_pesce.css("display","none");
        }
    }
    if(str==2){
        if(coll_pesce.css("display")=="flex"){
            coll_carne.css("display","none");
            coll_pesce.css("display","none");
        }
        else{
            coll_pesce.css("display","flex");
            coll_carne.css("display","none");
        }
    }        
}



