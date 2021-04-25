var carne = {
    p: "50",
    c: "20",
    cb: "30"
}

var pesce = {
    p: "30",
    c: "10",
    cb: "15"
}

var biscotto = {
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
    var l = document.getElementsByClassName("valore");
    var pro = document.getElementById("proteine");
    var cal = document.getElementById("calorie");
    var car = document.getElementById("carboidrati");
    var al = document.getElementById("alimentimangiati");
    var string = "";
    var p = 0;
    var c = 0;
    var cb = 0;
    for(var k=0; k<l.length; k++){
        if (l[k].name=="biscotto"){
            p += l[k].value*biscotto.p;
            c += l[k].value*biscotto.c;
            cb += l[k].value*biscotto.cb;
            if(l[k].value>0)string += "biscotto (" + (l[k].value*100).toFixed(2) + "g)  ";
        }
        else if(l[k].name=="carne"){
            p += l[k].value*carne.p;
            c += l[k].value*carne.c;
            cb += l[k].value*carne.cb;
            if(l[k].value>0)string += "carne (" + (l[k].value*100).toFixed(2) + "g)  ";
        }
        else if(l[k].name=="pesce"){
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

var list = document.getElementsByClassName("b");

for(var i=0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        calcola();
    });
    
}