
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


function kucukBolen() {
    let i = 20;
    while (true) {
        if (i % 20 === 0 && i % 19 === 0 && i % 18 === 0 && i % 17 === 0 && i % 16 === 0 && i % 15 === 0 && i % 14 === 0 && i % 13 === 0 && i % 12 === 0 && i % 11 === 0) {
        return i;
        break;
        }
        i=i+20;
    }
    
    
}
console.log(kucukBolen());

