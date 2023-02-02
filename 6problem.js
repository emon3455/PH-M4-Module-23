/*

    1. if ticket is less then 100 , per ticket is : 100tk
    2. if ticket is greater then 100 and less then 200 then first 100 ticket will be 100 and rest of them wll be 90 tk.
    3. if ticket is greater then 200:
        first 100:--> 100tk
        101-200: ---> 90tk
        200+: ---> 70tk 


*/

function ticketPrice(amount){

    const first100 = 100;
    const second100 = 90;
    const MoreThen200 = 70;

    if(amount<=100){
        return (first100 * amount);
    }
    else if(amount > 100 && amount <= 200){
        let f100Ticket= first100 * 100;
        let restTicket= second100 * (amount-100);
        return (f100Ticket+restTicket);
    }

    else{

        let f100 = first100 * 100;
        let s100 = second100 * 100;
        let rest = MoreThen200 * (amount-200);

        return(f100 + s100 + rest);

    }

}

let ticket = 220;
let price  = ticketPrice(ticket);
console.log(ticket,"Price:",price);