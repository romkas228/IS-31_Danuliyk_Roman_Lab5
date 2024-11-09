 function ex1(){
    function getShippingMessage(country,price,deliveryFee){
        let totalPrice = price + deliveryFee;
        console.log(`Shipping to ${country} will cost ${totalPrice} credits`);
    }
    console.log(`----------Exercise1----------`)
    getShippingMessage("Ukraine",150,10);
    getShippingMessage("USA",200,50);
    getShippingMessage("Poland",400,20);
 }






 