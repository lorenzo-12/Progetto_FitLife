

var aux = document.getElementsByClassName("b");
var ret = document.getElementById('testo');
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

for(var j=0; j<aux.length; j++){
    if(aux[j].name == "carne") aux[j].value=JSON.stringify(carne);
    else if (aux[j].name == "pesce") aux[j].value=JSON.stringify(pesce);
    else aux[j].value=JSON.stringify(biscotto);
}

alert(aux.length);


for(var i=0; i<aux.length; i++){
    aux[i].addEventListener('click', function(){
        var lista = document.getElementsByClassName("b");
        var calorie = document.getElementById("calorie");
        var proteine = document.getElementById("proteine");
        var carboidrati = document.getElementById("carboidrati");
        var p = 0;
        var c = 0;
        var cb = 0;
        for(var k=0; k<lista.length; k++){
            if(lista[k].checked) {
                p = p + parseInt(JSON.parse(lista[k].value).p);
                c = c + parseInt(JSON.parse(lista[k].value).c);
                cb = cb + parseInt(JSON.parse(lista[k].value).cb);
            }
        }
        calorie.innerHTML = p;
        proteine.innerHTML = c;
        carboidrati.innerHTML = cb;

    });
}
