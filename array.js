const arr = [10,20,30,40,50];

console.log(Array.isArray(arr)); // it will return true if it is array

// to check if a aray containing the element or not:
console.log(arr.includes(50)); // return true if it is exist.


// using index of to check an element of aray:

if(arr.indexOf(30) !== -1){
    console.log("Exist");
}
else{
    console.log("Do not exist");
}


// to concatinate 2 array:
const ary2 = [60,70,80,90];

const newAray = arr.concat(ary2);
console.log(newAray);
