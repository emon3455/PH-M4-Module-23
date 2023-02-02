const age = [ 10,20,30,40,50,60,70,80,90 ];
console.log(age);

const partial = age.slice(2,6); //it return a copy from the main array
console.log(partial);

// original array remain same in the slice.
console.log(age);