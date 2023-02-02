// find the sum of the array of object price.

const shoping = [
    {name: "Shirt", price:1200},
    {name: "pant", price:600},
    {name: "Show", price:2000},
];

function TotalShoping(array){

    let sum=0;
    for(let i=0; i<array.length; i++){

        sum = sum + array[i].price;

    }

    return sum;

}


let totalShopingCost = TotalShoping(shoping);
console.log("Total Shoping Cost:",totalShopingCost); 