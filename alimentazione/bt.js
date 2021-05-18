function checkLog(){
    var u = localStorage.getItem("user");
    if(u!=null){
        $("#btn-login").text(u);
    }
    else{
        alert("Sorry, you are not logged in!");
        document.location.href = "../Login/index.html";
    }
}
checkLog();

var carne1 = {p: "25",c: "271",cb: "0",g:"19", nome: "bistecca"}
var carne2 = {p: "31",c: "165",cb: "0",g:"4", nome: "pollo"}
var carne3 = {p: "29",c: "130",cb: "0",g:"1", nome: "tonno"}
var carne4 = {p: "18",c: "175",cb: "8",g:"7", nome: "salmone"}

var pesce1 = {p: "25",c: "402",cb: "1",g:"33", nome: "formaggio"}
var pesce2 = {p: "1",c: "359",cb: "83",g:"3", nome: "frutta secca"}
var pesce3 = {p: "5",c: "546",cb: "61",g:"31", nome: "cioccolata"}
var pesce4 = {p: "2",c: "160",cb: "9",g:"15", nome: "avocado"}

var farina1 = {p: "5",c: "131",cb: "25",g:"1", nome: "pasta"}
var farina2 = {p: "9",c: "130",cb: "28",g:"1", nome: "pane"}
var farina3 = {p: "6",c: "378",cb: "87",g:"1", nome: "cereali"}
var farina4 = {p: "3",c: "265",cb: "49",g:"0", nome: "riso"}

var frutta1 = {p: "2",c: "15",cb: "3",g:"0", nome: "insalata"}
var frutta2 = {p: "1",c: "89",cb: "23",g:"0", nome: "banana"}
var frutta3= {p: "1",c: "1",cb: "17",g:"0", nome: "zucchine"}
var frutta4 = {p: "1",c: "17",cb: "4",g:"0", nome: "pomodori"}


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
    sum_cal.innerHTML="CALORIE: "+tmp_carb;
    sum_carb.innerHTML="CARBOIDRATIF: "+tmp_cal;
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



