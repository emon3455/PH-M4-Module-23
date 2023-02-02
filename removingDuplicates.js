function removingDuplicates(aray){

    const unique = [];

    for(let i=0; i<aray.length; i++){
        if(unique.includes(aray[i]) === false){
            unique.push(aray[i]);
        }
    }

    return unique;
}

let friends = ["Emon","Sumon","Habib","Habib","Yousuf","Minhaz","Nabel","Nabel","Sabbir","Ridul"];

let uniqueAray = removingDuplicates(friends);

console.log(uniqueAray);