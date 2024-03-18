const addButton=document.querySelectorAll('.button');
let cartItems=[];
const addtoCart=e=>{
    const button = e.target.parentElement.parentElement;
    const price = button.querySelector('p').textContent;
    const bookInfoDiv = button.previousSibling.previousSibling;   
    const bookTitle = bookInfoDiv.querySelector('h3').textContent;
        
    
    let index = cartItems.findIndex(item => item.title === bookTitle);
            
    if (index !== -1) {
                    
        cartItems[index].quantity += 1;
    } else {
                    
        cartItems.push({ title: bookTitle, quantity: 1,price:price});
        document.getElementById('cart-value').innerHTML=cartItems.length;
            }
            
}
const cart=()=>{
    let totalCartPrice=0;
    cartItems.forEach((item)=>{

    const priceNumber = parseFloat(item.price.replace('$', ''));
    const total=priceNumber*item.quantity;
    console.log(`Item name : ${item.title} - Quantity : ${item.quantity}`)
    totalCartPrice+=total

    })
    let dollars = Math.floor(totalCartPrice);
    let cents = Math.round((totalCartPrice - dollars) * 100);
   console.log(`The total amount is ${dollars}$ and ${cents} cents`)
}
const cartButton=document.getElementById('cart');
cartButton.addEventListener('click',cart);

addButton.forEach(button => {
    button.addEventListener("click",addtoCart);
    
});
