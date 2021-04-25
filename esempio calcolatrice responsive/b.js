/*
let aux = document.querySelector('button');
let ret = document.querySelector('h1');

aux.addEventListener('click', () =>{
    let aaa = document.querySelector('input[type="checkbox"]:checked');
    ret.innerHTML = aaa.value;
});
*/

var aux = document.getElementsByClassName("b");
var ret = document.getElementById('testo');
var count = 0;

for(var i=0; i<aux.length; i++){
    aux[i].addEventListener('click', function(){
        var lista = document.getElementsByClassName("b");
        var testo = document.getElementById("testo");
        var c = 0;
        for(var k=0; k<lista.length; k++){
            if(lista[k].checked) c = c + parseInt(lista[k].value);
        }
        testo.innerHTML = c;
    });
}
