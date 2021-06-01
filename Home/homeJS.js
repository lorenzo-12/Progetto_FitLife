//FUNZIONE CHE CONTROLLA SE è STATO ESEGUITO IL LOGIN
function checkLog(){
    var u = localStorage.getItem("user");
    if(u!=null){
        $("#btn-login").text(u);
    }
}
checkLog();


function serviziClick(){ //funzione per reindirizzare alle rispettive pagine indicate
                        // dai div dei servizi
    $("#servEsercizi").on("click", () => {
         document.location.href = "../Scheda/Scheda.html"
     });
     $("#servAlim").on("click", () => {
        document.location.href = "../alimentazione/bt.html"
    });
    $("#servShop").on("click", () => {
        document.location.href = "../Shop/index.html"
    });
}

serviziClick();
