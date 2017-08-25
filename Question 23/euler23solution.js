/* 
ANSWER

  "All integers greater than 28123 can be written as the sum of two abundant numbers" 

  therefore,

  Sum of all positive integers which cannot be written as the sum of two abundant numbers 

  is equal to 

  Sum of all numbers (below 28124) -  Summation of the "sum of two abundant numbers(below 28124)".
*/

// sumOfAllBelow28214 = Sum of all numbers (below 28124)
totalSumOfAllBelow28214 = 0;

for(var i = 0; i < 28214; i++){
    totalSumOfAllBelow28214 = totalSumOfAllBelow28214 + i;
}

// abundantBelow28214 = Abundant numbers below 28214 (in Array form)
var abundantBelow28214 = [];

for(var i = 12; i < 28124; i++){
    var n = 1;
    var total = 0 ;
  
    for(n; n < i; n++) {
        if(i%n == 0){
            total = total + n;
        } else {
  
        }
    }
 
    if(n < total){
        abundantBelow28214.push(n);
    }
}

// sumOfAbundantBelow28214 = Sum of two abundant numbers(below 28124).
var sumOfAbundantBelow28214 = new Set();
var counter;
var sumtotal = 0;

var j;
var k;

for(j = 0; j < abundantBelow28214.length; j++){
    for(k = j; k < abundantBelow28214.length; k++){
        counter = abundantBelow28214[k]+abundantBelow28214[j];

	if(counter < 28214){
            sumOfAbundantBelow28214.add(counter);	
        }
      }
}

//  totalAbundant = Sum of sumOfAbundantBelow28214.
var totalAbundant = 0;

for(let item of sumOfAbundantBelow28214){
    totalAbundant = totalAbundant + item;
}

// Subtract  "totalSumOfAllBelow28214" from "totalAbundant".
var answer = totalSumOfAllBelow28214 - totalAbundant;

console.log(answer);

