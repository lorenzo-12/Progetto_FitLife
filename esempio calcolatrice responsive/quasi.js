var carne1 = {
    p: "50",
    c: "20",
    cb: "30"
}

var carne2 = {
    p: "25",
    c: "10",
    cb: "15"
}

var carne3 = {
    p: "25",
    c: "10",
    cb: "15"
}

var pesce = {
    p: "30",
    c: "10",
    cb: "15"
}

var dolce1 = {
    p: "60",
    c: "40",
    cb: "100"
}

var dolce2 = {
    p: "60",
    c: "40",
    cb: "100"
}

var dolce3 = {
    p: "60",
    c: "40",
    cb: "100"
}
function aumenta(s){
    var elem = document.getElementById(s);
    elem.value++;
}

function diminuisci(s){
    var elem = document.getElementById(s);
    if(elem.value>1) elem.value--;
    else if(elem.value>0) elem.value=0;
}

function calcola(){
    var l = document.getElementsByName("valore");
    var pro = document.getElementById("proteine");
    var cal = document.getElementById("calorie");
    var car = document.getElementById("carboidrati");
    var al = document.getElementById("alimentimangiati");
    var string = "";
    var p = 0;
    var c = 0;
    var cb = 0;
    for(var k=0; k<l.length; k++){
        if (l[k].id=="numB1"){
            p += l[k].value*dolce1.p;
            c += l[k].value*dolce1.c;
            cb += l[k].value*dolce1.cb;
            if(l[k].value>0)string += "dolce1 (" + (l[k].value*100).toFixed(2) + "g)  ";
        }
        else if (l[k].id=="numB2"){
            p += l[k].value*dolce2.p;
            c += l[k].value*dolce2.c;
            cb += l[k].value*dolce2.cb;
            if(l[k].value>0)string += "dolce2 (" + (l[k].value*100).toFixed(2) + "g)  ";
        }
        else if (l[k].id=="numB3"){
            p += l[k].value*dolce3.p;
            c += l[k].value*dolce3.c;
            cb += l[k].value*dolce3.cb;
            if(l[k].value>0)string += "dolce3 (" + (l[k].value*100).toFixed(2) + "g)  ";
        }
        else if(l[k].id=="numC1"){
            p += l[k].value*carne1.p;
            c += l[k].value*carne1.c;
            cb += l[k].value*carne1.cb;
            if(l[k].value>0)string += "carne1 (" + (l[k].value*100).toFixed(2) + "g)  ";
        }
        else if(l[k].id=="numC3"){
            p += l[k].value*carne3.p;
            c += l[k].value*carne3.c;
            cb += l[k].value*carne3.cb;
            if(l[k].value>0)string += "carne2 (" + (l[k].value*100).toFixed(2) + "g)  ";
        }
        else if(l[k].id=="numC2"){
            p += l[k].value*carne2.p;
            c += l[k].value*carne2.c;
            cb += l[k].value*carne2.cb;
            if(l[k].value>0)string += "carne3 (" + (l[k].value*100).toFixed(2) + "g)  ";
        }
        else if(l[k].id=="numP"){
            p += l[k].value*pesce.p;
            c += l[k].value*pesce.c;
            cb += l[k].value*pesce.cb;
            if(l[k].value>0)string += "pesce (" + (l[k].value*100).toFixed(2) + "g)  ";
        }
        
    }
    pro.innerHTML = p.toFixed(2);
    cal.innerHTML = c.toFixed(2);
    car.innerHTML = cb.toFixed(2);
    al.innerHTML = string;
}

var list = document.getElementsByName("b"); 

for(var i=0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        calcola();
    });
    
}


var ecarne = document.getElementsByClassName("alimenti_carne");
//var epesce = document.getElementsByClassName("alimenti_pesce");
var edolci = document.getElementsByClassName("alimenti_dolci");
for(var i=0; i<ecarne.length;i++){
    ecarne[i].style.visibility="hidden";
    edolci[i].style.visibility="hidden";
    

}


//0=hidden  1=visible
var c=0;
var d=0;
function show_hide(s){
    if(s=="alimenti_carne"){
        c++;
        var list = document.getElementsByClassName("alimenti_dolci");
        for(var i=0; i<list.length; i++){
            list[i].style.visibility = "hidden";
            d=0;
        }
        if(c%2==1){
            var list = document.getElementsByClassName("alimenti_carne");
            for(var i=0; i<list.length; i++){
                list[i].style.visibility = "visible";
            }
        }
        if(c%2==0){
            var list = document.getElementsByClassName("alimenti_carne");
            for(var i=0; i<list.length; i++){
                list[i].style.visibility = "hidden";
            }
        }
    }
    
    else if(s=="alimenti_dolci"){
        d++;
        var list = document.getElementsByClassName("alimenti_carne");
        for(var i=0; i<list.length; i++){
            list[i].style.visibility = "hidden";
            c=0;
        }
        if(d%2==1){
            var list = document.getElementsByClassName("alimenti_dolci");
            for(var i=0; i<list.length; i++){
                list[i].style.visibility = "visible";
            }
        }
        if(d%2==0){
            var list = document.getElementsByClassName("alimenti_dolci");
            for(var i=0; i<list.length; i++){
                list[i].style.visibility = "hidden";
            }
        }
    }
    
    
}

