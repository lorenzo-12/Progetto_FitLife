
function serviziClick(){ //funzione per reindirizzare alle rispettive pagine indicate
                        // dai div dei servizi
    $("#servEsercizi").on("click", () => {
         document.location.href = "../Scheda/Scheda.html"
        //  document.location.href.split('/')[0]+"/Scheda/Scheda.html";
     });
     $("#servAlim").on("click", () => {
        document.location.href = "../alimentazione/test.html"
    });
    $("#servShop").on("click", () => {
        document.location.href = "../Shop/Shop.html"
    });
}

serviziClick();
