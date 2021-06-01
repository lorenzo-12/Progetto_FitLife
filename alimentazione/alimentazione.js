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

// lista degli oggetti che rappresentano gli alimenti 
var elem1 = {p: "25",c: "271",cb: "0",g:"19", nome: "bistecca"}
var elem2 = {p: "31",c: "165",cb: "0",g:"4", nome: "pollo"}
var elem3 = {p: "29",c: "130",cb: "0",g:"1", nome: "tonno"}
var elem4 = {p: "18",c: "175",cb: "8",g:"7", nome: "salmone"}

var elem5 = {p: "25",c: "402",cb: "1",g:"33", nome: "formaggio"}
var elem6 = {p: "1",c: "359",cb: "83",g:"3", nome: "frutta secca"}
var elem7 = {p: "5",c: "546",cb: "61",g:"31", nome: "cioccolata"}
var elem8 = {p: "2",c: "160",cb: "9",g:"15", nome: "avocado"}

var elem9 = {p: "5",c: "131",cb: "25",g:"1", nome: "pasta"}
var elem10 = {p: "9",c: "130",cb: "28",g:"1", nome: "pane"}
var elem11 = {p: "6",c: "378",cb: "87",g:"1", nome: "cereali"}
var elem12 = {p: "3",c: "265",cb: "49",g:"0", nome: "riso"}

var elem13 = {p: "2",c: "15",cb: "3",g:"0", nome: "insalata"}
var elem14 = {p: "1",c: "89",cb: "23",g:"0", nome: "banana"}
var elem15= {p: "1",c: "1",cb: "17",g:"0", nome: "zucchine"}
var elem16 = {p: "1",c: "17",cb: "4",g:"0", nome: "pomodori"}

//dichiarazione di variabili che verrano poi utilizzate all'interno delle funzioni successive
var le = new Array();
le[0]=elem1; le[1]=elem2; le[2]=elem3; le[3]=elem4;
le[4]=elem5; le[5]=elem6; le[6]=elem7; le[7]=elem8;
le[8]=elem9; le[9]=elem10; le[10]=elem11; le[11]=elem12;
le[12]=elem13; le[13]=elem14; le[14]=elem15; le[15]=elem16; 

var sum_prot = document.getElementById("sum_prot");
var sum_cal = document.getElementById("sum_cal");
var sum_carb = document.getElementById("sum_carb");
var sum_gra = document.getElementById("sum_gra");
//var sum_ali = document.getElementById("alsel");


//funzione che calcola il valore totale delle proteine, dei carboidrati, ecc... 
function conta(){
    //setto delle variabili a 0, che mi serviranno poi per tener conto della somma dei macro
    var a = document.getElementsByName("bot");
    var tmp_prot = 0;
    var tmp_cal = 0;
    var tmp_carb = 0;
    var tmp_gra = 0;
    //prendo la lista e la svuoto (poichè la ricompongo ogni volta in modo da mantenere gli oggetti in ordine)
    $("#alimenti_lista").empty();
    for(var i=0; i<a.length; i++){
        if(a[i].value=="") a[i].value=0;
        //sommo alle variabili di prima il valore dei macro di ogni oggetto (moltiplicati per il nuemro di oggetti)
        tmp_prot = parseInt(tmp_prot)+parseFloat(a[i].value)*parseInt(le[i].p);
        tmp_cal = parseInt(tmp_cal)+parseFloat(a[i].value)*parseInt(le[i].c);
        tmp_carb = parseInt(tmp_carb)+parseFloat(a[i].value)*parseInt(le[i].cb);
        tmp_gra = parseInt(tmp_gra)+parseFloat(a[i].value)*parseInt(le[i].g);
        //se un alimento è presente almeno una votla lo aggiungo alla lista.
        if(a[i].value>0){
            var aux = 0;
            aux = parseFloat(a[i].value)*100
            if(a[i].value>0) $("#alimenti_lista").append($("<li class='list-group-item' id='li_item'>").html(le[i].nome));
        }
    }
    //modifico la scritta dentro i bottoni
    sum_prot.innerHTML="PROTEINE: "+tmp_prot;
    sum_cal.innerHTML="CALORIE: "+tmp_cal;
    sum_carb.innerHTML="CARBOIDRATI: "+tmp_carb;
    sum_gra.innerHTML="GRASSI: "+tmp_gra;


}

//funziona che serve per aumentare o diminuire il numero degli alimenti
function aumenta(str,n){
    //prendo l'elemento e un numero (1 o -1)
    var x = document.getElementById(str);
    //se il n==1 allora devo incrementare il valore dell'elemento 
    if(n==1){
        x.value++;
    }
    //se n==-1 devo decrementare il valore dell'elemento
    if(n==-1){
        x.value--;
    }
    //controllo che il valore non sia <0, se diventa minore di 0 allora lo pongo a zero
    if(x.value<0) x.value=0;
    //siccome ho cambiato il valore richiamo la funzione conta per aggiornare i valori 
    conta();
}


var coll_carboidrati = $(".collapse_carboidrati");
var coll_proteine = $(".collapse_proteine");
var coll_grassi = $(".collapse_grassi");
var coll_calorie = $(".collapse_calorie");


//funzione mostra a schermo al massimo 1 solo gruppo di alimenti 
function show(str){
    //se str==1 (cioè gruppo proteine allora: 
    if(str==1){
        //se gli alimenti sono visibili allora metti tutti i gruppi invisibili
        if(coll_proteine.css("display")=="flex"){
            coll_carboidrati.css("display","none");
            coll_proteine.css("display","none");
            coll_grassi.css("display","none");
            coll_calorie.css("display","none");
        }
        //altrimenti (quindi nel caso in cui il gruppo di aliemnti delle proteine non era visibilie)
        //lo metti visibile e metti tutti gli altri a non visibili
        else{
            coll_proteine.css("display","flex");
            coll_carboidrati.css("display","none");
            coll_grassi.css("display","none");
            coll_calorie.css("display","none");
        }
    }
    //stesso ragionamento di sopra ma riguardo agli alimenti del gruppo CARBOIDRATI
    if(str==2){
        if(coll_carboidrati.css("display")=="flex"){
            coll_proteine.css("display","none");
            coll_carboidrati.css("display","none");
            coll_grassi.css("display","none");
            coll_calorie.css("display","none");
        }
        else{
            coll_carboidrati.css("display","flex");
            coll_proteine.css("display","none");
            coll_grassi.css("display","none");
            coll_calorie.css("display","none");
        }
    }
    if(str==3){
        if(coll_grassi.css("display")=="flex"){
            coll_proteine.css("display","none");
            coll_carboidrati.css("display","none");
            coll_grassi.css("display","none");
            coll_calorie.css("display","none");
        }
        else{
            coll_grassi.css("display","flex");
            coll_proteine.css("display","none");
            coll_carboidrati.css("display","none");
            coll_calorie.css("display","none");
        }
    } 
    if(str==4){
        if(coll_calorie.css("display")=="flex"){
            coll_proteine.css("display","none");
            coll_carboidrati.css("display","none");
            coll_grassi.css("display","none");
            coll_calorie.css("display","none");
        }
        else{
            coll_calorie.css("display","flex");
            coll_proteine.css("display","none");
            coll_carboidrati.css("display","none");
            coll_grassi.css("display","none");
        }
    }       
}



