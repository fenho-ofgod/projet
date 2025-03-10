const product = [
    {
        id: 0,
        image:'image/1.jpg',
        title: 'Z Flip',
        price: 120,
    },
    {
        id: 1,
        image:'image/2.jpg',
        title: 'Air Pods',
        price: 60,
    },
    {
        id: 2,
        image:'image/3.jpg',
        title: 'DSLR Camera',
        price: 230,
    },
    {
        id: 3,
        image:'image/4.jpg',
        title: 'Head phones',
        price: 100,
    },
];

const categories = [...new Set(product.map((item)=>
{return item}))]
let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>{
    var {image, title, price} = item;
    return(
        `<div class='box'>
           <div class='img-box'>
             <img class='image' src=${image}></img>
           </div>
         <div class='bottom'>
         <p>${title}</p>
         <h2>$ ${price}.00</h2>`+
         "<button onclick='addtocart("+(i++)+")'>Ajouter au panier</button>"+
         `</div>
         </div>`
    )
}).join('')

var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Votre panier est vide"
        document.getElementById("total").innerHTML = "$ "+0+" .00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
            {
                var {image, title, price} = items;
                total=total+price;
                document.getElementById("total").innerHTML = "$ "+total+" .00";
                return(
                    `<div class= 'cart-item'>
                    <div class='row-img'>
                        <img class='rowing' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h5 style='font-size:15px;'>$ ${price}.00</h2>`+
                    "<i class='bx bxs-trash-alt' onclick= 'delElement("+ (j++) +")'></i></div>"
                );

        }).join('');
            

        
    }

}