function ex2(){
function makeTransaction(quantity, pricePerDroid, customerCredits){
    let totalprice = pricePerDroid * quantity;
    if( totalprice <= customerCredits){
        console.log(`You ordered ${quantity} droids worth ${totalprice} credits!`)
    }
    else{
        console.log(`Insufficient funds!`)
    }
}
console.log(`----------Exercise2----------`)
makeTransaction( 3,500,5000)
makeTransaction( 5,500,5000)
makeTransaction( 20,500,5000)
}