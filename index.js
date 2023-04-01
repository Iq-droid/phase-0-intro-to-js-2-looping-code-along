const names = ["Ada","Brendan","Aki"];
const x = "birthday";

function writeCards(names, x){
    let result = [];
    for(let i = 0; i < names.length; i++){
        result.push(`Thank you, ${names[i]}, for the wonderful${x} gift!`);
    }
    return result;
}

let returnedvalue = writeCards(name, x);
console.log(writeCards(names, x));

function countDown(num){
    while (num >= 0) {
        console.log(num--);
    }
}
countDown(6);