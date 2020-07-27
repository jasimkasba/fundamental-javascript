function doubleIt(num){ // akhane num holo paramiter
  var result = num * 2;
  // console.log(result);
}

doubleIt(5);
doubleIt(50);

function doubleIt(num){
  var result = num * 2;
  return result;
}

var first = doubleIt(5); // akhane paramiter man ke akta variable rakhlam
var second = doubleIt(50);
// console.log(first, second);
var total = first + second; // jodi amra total ber korte chai. tahole total name akta var assin korlam.
console.log(total);

// amra chaile akadik paramiter niye oo kaj korte pari.

function add( num1, num2){
  var result = num1 + num2;
  return result;
}

var sum = add(15, 17)
console.log(sum);
