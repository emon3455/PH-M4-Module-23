const friends = [10,20,30,40,50,60,70,80,90];

const partial = friends.splice(2, 5);
// it will remove index 2 to 5 element
console.log(partial);


const age = [1,2,3,4,5,6,7,8,9];

const newAray = age.splice(2,8);
console.log(newAray);

age.splice(2,0,10,20,30);
console.log(age);

