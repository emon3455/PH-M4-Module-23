// find the Totall cost from the array of object shoping.

const shoping = [
    {name: "Shirt", quantity: 3,  price:1000},
    {name: "pant",  quantity: 1, price:500},
    {name: "Show",  quantity: 2, price:2000},
];

function TotalShoping(array){

    let sum=0;
    for(let i=0; i<array.length; i++){

        sum = sum + array[i].price * array[i].quantity;

    }

    return sum;

}


let totalShopingCost = TotalShoping(shoping);
console.log("Total Shoping Cost:",totalShopingCost); 