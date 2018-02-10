//input integer >0  and <4000
//output in either english or roman numeral

//empty string to store the result
//store modulo as 10
//while the number is greater than zero
//number modulo mod  and store the remainder
//subtract remiinder from the number
//use the mod as the key and the remainder as the index
//increase mod by 1 zero by multiplying by 10

let numbersInEnglish = {
    10: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    100: ['zero', 'ten','twenty', 'thiry', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    1000: 'hundred',
    10000: 'thousand',
    100000: ['zero', 'ten', 'twenty', 'thiry', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    1000000: 'hundred',
    10000000: 'million',
    100000000:['zero', 'ten', 'twenty', 'thiry', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    1000000000: 'hundred',
    10000000000: 'billion',
    100000000000: ['zero', 'ten', 'twenty', 'thiry', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    1000000000000: 'hundred',
    10000000000000: 'trillion',
    100000000000000: ['zero', 'ten', 'twenty', 'thiry', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    1000000000000000: 'hundred'
}

let tensArray = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function numberConvert(num){
    let result = [];
    let modulo = 10;
    while(num){
      if(!numbersInEnglish[modulo]){
        return 'please choose a number in the trillions or less';
      }
        let remainder = num % modulo;
        let remainderKey = remainder.toString()[0];
        num -= remainder;
        if(Array.isArray(numbersInEnglish[modulo])){
          result.unshift(numbersInEnglish[modulo][remainderKey]);
        } else {
          result.unshift(numbersInEnglish[modulo]);
          result.unshift(numbersInEnglish[10][remainderKey]);
        }
        modulo *= 10;
    }
    while(result.indexOf('ten') >= 0){
      let tens = result.indexOf('ten');
      let nextDigit = result[tens + 1];
      let convertNum = numbersInEnglish[10].indexOf(nextDigit);
      result.splice(tens, 2, tensArray[convertNum - 1])
    }
    return result.join(" ");
}
let result = numberConvert(528333722387519);
console.log(result);
