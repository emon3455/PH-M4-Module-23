/*
    per chair wood = 3;
    per table wood = 10;
    per bed wood = 50;
*/

function woodCount(chairs,tables,beds){

    const perChairWood = 3;
    const perTableWood = 10;
    const perbedWood = 50;

    const forChairWood = perChairWood * chairs;
    const forTableWood = perTableWood *tables;
    const forBedWood = perbedWood * beds;

    const totalWood = forChairWood + forTableWood + forBedWood;

    return totalWood;

}

let totalWood = woodCount(1,1,1);
console.log(totalWood);