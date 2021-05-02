
/* --- funzione per nascondere e mostrare gli alimenti --- */

var a = document.getElementsByClassName('proteine');
var b = document.getElementsByClassName('calorie');
var c = document.getElementsByClassName('carboidrati');
var d = document.getElementsByClassName('alimentimangiati');


var carne_hide=0;
var dolce_hide=0;
function show_hide(s){

    if(s=="carne1"){
        carne_hide++;
        var list = document.getElementsByClassName("pesce1");
        for(var i=0; i<list.length; i++){
            list[i].style.visibility = "hidden";
            dolce_hide=0;
        }
        if(carne_hide%2==1){
            carne_hide=1;
            var list = document.getElementsByClassName("carne1");
            for(var i=0; i<list.length; i++){
                list[i].style.visibility = "visible";
            }
        }
        if(carne_hide%2==0){
            carne_hide=0;
            var list = document.getElementsByClassName("carne1");
            for(var i=0; i<list.length; i++){
                list[i].style.visibility = "hidden";
            }
        }
        /*
        var tmp = document.getElementById('valoreBC1');
        var tmp2 = document.getElementById('valoreC1');
        tmp.value=tmp2.value;
        var tmp = document.getElementById('valoreBC2');
        var tmp2 = document.getElementById('valoreC2');
        tmp.value=tmp2.value;
        var tmp = document.getElementById('valoreBC3');
        var tmp2 = document.getElementById('valoreC3');
        tmp.value=tmp2.value;
        */
    }
    
    if(s=="pesce1"){
        dolce_hide++;
        var list = document.getElementsByClassName("carne1");
        for(var i=0; i<list.length; i++){
            list[i].style.visibility = "hidden";
            carne_hide=0;
        }
        if(dolce_hide%2==1){
            dolce_hide=1;
            var list = document.getElementsByClassName("pesce1");
            for(var i=0; i<list.length; i++){
                list[i].style.visibility = "visible";
            }
        }
        if(dolce_hide%2==0){
            dolce_hide=0;
            var list = document.getElementsByClassName("pesce1");
            for(var i=0; i<list.length; i++){
                list[i].style.visibility = "hidden";
            }
        }
        /*
        var tmp = document.getElementById('valoreBC1');
        var tmp2 = document.getElementById('valoreD1');
        tmp.value=tmp2.value;
        var tmp = document.getElementById('valoreBC2');
        var tmp2 = document.getElementById('valoreD2');
        tmp.value=tmp2.value;
        var tmp = document.getElementById('valoreBC3');
        var tmp2 = document.getElementById('valoreD3');
        tmp.value=tmp2.value;
        */
    }
    /*
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
    */
    if((carne_hide==0) && (dolce_hide==0)){
        a[0].style.visibility="hidden";
        b[0].style.visibility="hidden";
        c[0].style.visibility="hidden";
        d[0].style.visibility="hidden";
    }
    else{
        a[0].style.visibility="visible";
        b[0].style.visibility="visible";
        c[0].style.visibility="visible";
        d[0].style.visibility="visible";
    }
}