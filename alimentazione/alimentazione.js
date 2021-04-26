//  DEFINISCO LE VARIABILI
var carne1 = {
    p: 10,
    c: 10,
    cb: 10
}
var carne2 = {
    p: 10,
    c: 10,
    cb: 10
}
var carne3 = {
    p: 10,
    c: 10,
    cb: 10
}
var dolce1 = {
    p: 20,
    c: 20,
    cb: 20
}
var dolce2 = {
    p: 20,
    c: 20,
    cb: 20
}
var dolce3 = {
    p: 20,
    c: 20,
    cb: 20
}

// lva = lista valori alimenti
var lva = [

    document.getElementById("valoreC1"),
    carne1,
    document.getElementById("valoreC2"),
    carne2,
    document.getElementById("valoreC3"),
    carne3,

    document.getElementById("valoreD1"),
    dolce1,
    document.getElementById("valoreD2"),
    dolce2,
    document.getElementById("valoreD3"),
    dolce3
]


// MI SALVO QUESTI VALORI PER NON DOVERLI CERCARE OGNI VOLTA

var valorec1 = document.getElementById("valoreC1");
valorec1 = valorec1.value;

var valorec2 = document.getElementById("valoreC2");
valorec2 = valorec2.value;

var valorec3 = document.getElementById("valoreC3");
valorec3 = valorec3.value;


// DEFINISCO LE FUNZIONI

var carne_hide=0;
var dolce_hide=0;
var ecarne = document.getElementsByClassName("alimento_carne");
var edolci = document.getElementsByClassName("alimento_dolce");
for(var i=0; i<ecarne.length;i++){
    ecarne[i].style.visibility="hidden";
    edolci[i].style.visibility="hidden";
}

var aa = document.getElementsByClassName('bottone_conta_1');
var bb = document.getElementsByClassName('bottone_conta_2');
var cc = document.getElementsByClassName('bottone_conta_3');

aa[1].style.visibility="hidden"; aa[2].style.visibility="hidden"; aa[3].style.visibility="hidden";
bb[1].style.visibility="hidden"; bb[2].style.visibility="hidden"; bb[3].style.visibility="hidden";
cc[1].style.visibility="hidden"; cc[2].style.visibility="hidden"; cc[3].style.visibility="hidden";

/*
FUNZIONE CHE HA LO SCOPO DI AUMENTARE O DIMINUIRE IL VALORE DI valoreBC1, valoreBC2 e valoreBC3
*/
function incrementa(s,n){
    var campo_1 = document.getElementById(s);
    if(n==1){
        campo_1.value++;
    }
    else{
        if(campo_1.value>1){
            campo_1.value--;
        }
        else campo_1.value=0;
    } 
    modifica(s);
    
}

/*
FUNZIONE CHE IN BASE A QUALE BOTTONE SCELTA SI PREME MOSTRA IL GRUPPO DI ALIMENTI CORRETTO
*/
function show_hide(s){

    if(s=="alimento_carne"){
        carne_hide++;
        var list = document.getElementsByClassName("alimento_dolce");
        for(var i=0; i<list.length; i++){
            list[i].style.visibility = "hidden";
            dolce_hide=0;
        }
        if(carne_hide%2==1){
            carne_hide=1;
            var list = document.getElementsByClassName("alimento_carne");
            for(var i=0; i<list.length; i++){
                list[i].style.visibility = "visible";
            }
        }
        if(carne_hide%2==0){
            carne_hide=0;
            var list = document.getElementsByClassName("alimento_carne");
            for(var i=0; i<list.length; i++){
                list[i].style.visibility = "hidden";
            }
        }
        var tmp = document.getElementById('valoreBC1');
        var tmp2 = document.getElementById('valoreC1');
        tmp.value=tmp2.value;
        var tmp = document.getElementById('valoreBC2');
        var tmp2 = document.getElementById('valoreC2');
        tmp.value=tmp2.value;
        var tmp = document.getElementById('valoreBC3');
        var tmp2 = document.getElementById('valoreC3');
        tmp.value=tmp2.value;
    }
    
    if(s=="alimento_dolce"){
        dolce_hide++;
        var list = document.getElementsByClassName("alimento_carne");
        for(var i=0; i<list.length; i++){
            list[i].style.visibility = "hidden";
            carne_hide=0;
        }
        if(dolce_hide%2==1){
            dolce_hide=1;
            var list = document.getElementsByClassName("alimento_dolce");
            for(var i=0; i<list.length; i++){
                list[i].style.visibility = "visible";
            }
        }
        if(dolce_hide%2==0){
            dolce_hide=0;
            var list = document.getElementsByClassName("alimento_dolce");
            for(var i=0; i<list.length; i++){
                list[i].style.visibility = "hidden";
            }
        }
        var tmp = document.getElementById('valoreBC1');
        var tmp2 = document.getElementById('valoreD1');
        tmp.value=tmp2.value;
        var tmp = document.getElementById('valoreBC2');
        var tmp2 = document.getElementById('valoreD2');
        tmp.value=tmp2.value;
        var tmp = document.getElementById('valoreBC3');
        var tmp2 = document.getElementById('valoreD3');
        tmp.value=tmp2.value;
    }
    if((carne_hide==0) && (dolce_hide==0)){
        for(var k=1; k<4; k++){
            aa[k].style.visibility="hidden";
            bb[k].style.visibility="hidden";
            cc[k].style.visibility="hidden";
        }
    }
    else{
        for(var k=1; k<4; k++){
            aa[k].style.visibility="visible";
            bb[k].style.visibility="visible";
            cc[k].style.visibility="visible";
        }
    }
}

/*
FUNZIONE CHE MANTIENE COERENTI I VALORE PRESENTI NEI CAMPI NASCOSTI DEI SINGOLI ELEMENTI
CON I VALORI PRESENTI NEI BOTTONI valoreBC1, valoreBC2, valoreBC3
*/
function modifica(s){
    var campo_1 = document.getElementById(s);
    if(s=='valoreBC1'){
        if(carne_hide==1){
            var nuovo_valore = document.getElementById('valoreC1');
            nuovo_valore.value=campo_1.value;
        }
        else if(dolce_hide==1){
            var nuovo_valore = document.getElementById('valoreD1');
            nuovo_valore.value=campo_1.value;
        }
    }

    else if(s=='valoreBC2'){
        if(carne_hide==1){
            var nuovo_valore = document.getElementById('valoreC2');
            nuovo_valore.value=campo_1.value;
        }
        else if(dolce_hide==1){
            var nuovo_valore = document.getElementById('valoreD2');
            nuovo_valore.value=campo_1.value;
        }
    }

    else if(s=='valoreBC3'){
        if(carne_hide==1){
            var nuovo_valore = document.getElementById('valoreC3');
            nuovo_valore.value=campo_1.value;
        }
        else if(dolce_hide==1){
            var nuovo_valore = document.getElementById('valoreD3');
            nuovo_valore.value=campo_1.value;
        }
    }
    calcola();
}

function calcola(){
    
    
    var p = 0;
    var c = 0;
    var cb = 0;
    var pro = document.getElementById('proteine');
    var cal = document.getElementById('calorie');
    var car = document.getElementById('carboidrati');
    var al = document.getElementById('alimentimangiati');
    var str = "";
    
    
    for(var i=0;i<lva.length; ){
        
        p += parseInt(lva[i].value)*lva[i+1].p;
        cb += parseInt(lva[i].value)*lva[i+1].c;
        c += parseInt(lva[i].value)*lva[i+1].cb;
        if(lva[i].value>0){
            str += lva[i].name+" ("+(lva[i].value*100).toFixed(2)+"g)";
            str += "  ";
        }
        i+=2;
        
    }
    
    pro.innerHTML = p.toFixed(2);
    cal.innerHTML = c.toFixed(2);
    car.innerHTML = cb.toFixed(2);
    al.innerHTML = str;
}
