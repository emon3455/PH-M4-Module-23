// find the cheepest price from the given array of objects:
const phones =[

    {name: " I-Phone ",Price: 120000,color:"black"},
    {name: " Xaomi ",  Price: 20000,color:"Silver"},
    {name: " Oppo ",   Price: 40000,color:"Red"},
    {name: " Realme ", Price: 30000,color:"Blue"},

];


function chepestPhone(phones){

    let chep = phones[0];
    for(let i = 0; i<phones.length; i++){

        if(chep.Price > phones[i].Price ){
            chep = phones[i];
        }

    }

    return chep;

}

let chepPrice = chepestPhone(phones);
console.log(chepPrice);