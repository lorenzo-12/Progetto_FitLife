var carne1 = {p: "10",c: "20",cb: "30",g:"40", nome: "carne1"}
var carne2 = {p: "10",c: "20",cb: "30",g:"40", nome: "carne2"}
var carne3 = {p: "10",c: "20",cb: "30",g:"40", nome: "carne3"}
var carne4 = {p: "10",c: "20",cb: "30",g:"40", nome: "carne4"}

var pesce1 = {p: "10",c: "20",cb: "30",g:"40", nome: "pesce1"}
var pesce2 = {p: "10",c: "20",cb: "30",g:"40", nome: "pesce2"}
var pesce3 = {p: "10",c: "20",cb: "30",g:"40", nome: "pesce3"}
var pesce4 = {p: "10",c: "20",cb: "30",g:"40", nome: "pesce4"}

var farina1 = {p: "10",c: "20",cb: "30",g:"40", nome: "farina1"}
var farina2 = {p: "10",c: "20",cb: "30",g:"40", nome: "farina2"}
var farina3 = {p: "10",c: "20",cb: "30",g:"40", nome: "farina3"}
var farina4 = {p: "10",c: "20",cb: "30",g:"40", nome: "farina4"}

var frutta1 = {p: "10",c: "20",cb: "30",g:"40", nome: "frutta1"}
var frutta2 = {p: "10",c: "20",cb: "30",g:"40", nome: "frutta2"}
var frutta3 = {p: "10",c: "20",cb: "30",g:"40", nome: "frutta3"}
var frutta4 = {p: "10",c: "20",cb: "30",g:"40", nome: "frutta4"}

var le = new Array();
le[0]=carne1; le[1]=carne2; le[2]=carne3; le[3]=carne4;
le[4]=pesce1; le[5]=pesce2; le[6]=pesce3; le[7]=pesce4;
le[8]=farina1; le[9]=farina2; le[10]=farina3; le[11]=farina4;
le[12]=frutta1; le[13]=frutta2; le[14]=frutta3; le[15]=frutta4;

var sum_prot = document.getElementById("sum_prot");
var sum_cal = document.getElementById("sum_cal");
var sum_carb = document.getElementById("sum_carb");
var sum_gra = document.getElementById("sum_gra");
//var sum_ali = document.getElementById("alsel");



function conta(){
    var a = document.getElementsByName("bot");
    var tmp_prot = 0;
    var tmp_cal = 0;
    var tmp_carb = 0;
    var tmp_gra = 0;
    $("#alimenti_lista").empty();
    for(var i=0; i<a.length; i++){
        if(a[i].value=="") a[i].value=0;
        tmp_prot = parseInt(tmp_prot)+parseFloat(a[i].value)*parseInt(le[i].p);
        tmp_cal = parseInt(tmp_cal)+parseFloat(a[i].value)*parseInt(le[i].c);
        tmp_carb = parseInt(tmp_carb)+parseFloat(a[i].value)*parseInt(le[i].cb);
        tmp_gra = parseInt(tmp_gra)+parseFloat(a[i].value)*parseInt(le[i].g);
        if(a[i].value>0){
            var aux = 0;
            aux = parseFloat(a[i].value)*100
            if(a[i].value>0) $("#alimenti_lista").append($("<li class='list-group-item' id='li_item'>").html(le[i].nome));
        }
    }
    sum_prot.innerHTML="PROTEINE: "+tmp_prot;
    sum_cal.innerHTML="CARBOIDRATI: "+tmp_carb;
    sum_carb.innerHTML="CALORIE: "+tmp_cal;
    sum_gra.innerHTML="GRASSI: "+tmp_gra;


}

function aumenta(str,n){
    var x = document.getElementById(str);
    if(n==1){
        x.value++;
    }
    if(n==-1){
        x.value--;
    }
    if(x.value<0) x.value=0;
    conta();
}


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



