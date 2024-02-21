const discountCodes = {
    "NEWYEAR": 20,"BLACKFRIDAY": 30,"SUMMERSALE": 15
};
const price_price_DISCOUNT = 10
const price_amount_DISCOUNT = 5
let finalDiscount = 0
let price = 1500
let amount = 3
 if(price >= 1000){
    console.log("your discount", price_price_DISCOUNT + "%")
    finalDiscount += price_price_DISCOUNT
 };
 if(amount >= 3){
    console.log("your discount", price_amount_DISCOUNT + "%")
    finalDiscount += price_amount_DISCOUNT
 };
 const discountCode = "NEWYEAR"; 
if (discountCodes.hasOwnProperty(discountCode)) {
    console.log("Your discount code" + discountCode, discountCodes[discountCode] + "%");
    finalDiscount += discountCodes[discountCode]; 
};
 console.log( "your final discount is", finalDiscount + "%")
 console.log("you have to pay", price *(100 - finalDiscount)/100)
