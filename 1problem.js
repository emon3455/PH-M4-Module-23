/*
show output from 1-50
if the number is divisible by 3 instead of the number print "foo"
if the number is divisible by 5 instead of the number print "bar"
if the number is divisible by 3 and 5 instead of the number print "foobar"
*/

for(let i=1; i<=50; i++){

    if( i % 3 === 0 && i%5 === 0){
        console.log("foobar");
    }

    else if(i%3 ===0){
        console.log("foo");
    }

    else if(i%5 === 0){
        console.log("bar");
    }
    else{
        console.log(i);
    }
}