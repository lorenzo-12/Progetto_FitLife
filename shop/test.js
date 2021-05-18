function checkLog(){
    var u = localStorage.getItem("user");
    if(u!=null){
        $("#btn-login").text(u);
    }
}
checkLog();

let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Barretta proteica white',
        tag: 'barprot1',
        price: 2,
        inCart: 0
    },
    {
        name: 'Barretta proteica chocolate',
        tag: 'protbar2',
        price: 2,
        inCart: 0
    },
    {
        name: 'Barretta proteica vegana',
        tag: 'barprotveg',
        price: 3,
        inCart: 0
    },
    {
        name: 'Proteine in polvere 1',
        tag: 'polvere1',
        price: 20,
        inCart: 0
    },
    {
        name: 'Proteine in polvere 2',
        tag: 'polvere2',
        price: 25,
        inCart: 0
    },
    {
        name: 'Proteine in polvere 3',
        tag: 'polvere3',
        price: 25,
        inCart: 0
    },
    {
        name: 'Set bilanciere + manubri',
        tag: 'setmanubri',
        price: 35,
        inCart: 0
    },
    {
        name: 'Set manubri 20kg',
        tag: 'setmanubri2',
        price: 30,
        inCart: 0
    },
    {
        name: 'Tappetino fitness',
        tag: 'tappetino',
        price: 10,
        inCart: 0
    }
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
        displayCart();
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    //c'è qualcosa nel nostro localStorage
    if(cartItems != null) {

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems, //riprendo gli oggetti che già erano presenti
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    if(cartItems && productContainer ) {
        productContainer.innerHTML = '';
        //Object.values(cartItems) mi ritorna un array degli oggetti contenuti
        // e per ognuno attraverso la map eseguo la seguente funzione
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <div class="image11">
                <img src="./images/${item.tag}.jpg">
                </div>
                <span>${item.name}</span>
            </div>
            <div class="price">${item.price},00€</div>
            <div class="quantity">
                <ion-icon name="caret-back-circle" onclick="decrease('${item.tag}')"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon name="caret-forward-circle" onclick="increase('${item.tag}')"></ion-icon>
            </div>
            <div class="total">
                ${item.inCart * item.price},00€
            </div>
            `;
        });

        productContainer.innerHTML += `
        <div class="baskettotal">
                </br>  
                Totale ${cartCost},00€
        </div>
        `
    }
}

function decrease(x){
    let cartItems = localStorage.getItem("productsInCart");
    let cartCost = localStorage.getItem('totalCost');
    let cartNum = localStorage.getItem('cartNumbers');
    cartNum = JSON.parse(cartNum);
    castCost = JSON.parse(cartCost);
    cartItems = JSON.parse(cartItems);
    cartCost -= cartItems[x].price;
    cartNum -= 1;
    cartItems[x].inCart -= 1;
    if(cartItems[x].inCart == 0){
        delete cartItems[x];
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    localStorage.setItem("totalCost", JSON.stringify(cartCost));
    localStorage.setItem("cartNumbers", JSON.stringify(cartNum));
    displayCart();
    onLoadCartNumbers();
}

function increase(x){
    let cartItems = localStorage.getItem("productsInCart");
    let cartCost = localStorage.getItem('totalCost');
    let cartNum = localStorage.getItem('cartNumbers');
    cartNum = JSON.parse(cartNum);
    castCost = JSON.parse(cartCost);
    cartItems = JSON.parse(cartItems);
    cartCost = parseInt(cartCost) + cartItems[x].price;
    cartNum = cartNum + 1;
    cartItems[x].inCart += 1;
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    localStorage.setItem("totalCost", JSON.stringify(cartCost));
    localStorage.setItem("cartNumbers", JSON.stringify(cartNum));
    displayCart();
    onLoadCartNumbers();
}

onLoadCartNumbers();
displayCart();
