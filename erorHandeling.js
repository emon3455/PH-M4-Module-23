// input type error handeling:

function summation(num1 , num2){

    if(typeof num1 !== "number" || typeof num2 !== "number"){
        console.log("Please enter an number");
        return;
    }
    
    return num1 + num2;

}

let sum = summation("10",20);
console.log(sum);