/* 
QUESTION

A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. 
For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.
As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, 
the smallest number that can be written as the sum of two abundant numbers is 24. 

By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. 
However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number 
that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

ANSWER

  "All integers greater than 28123 can be written as the sum of two abundant numbers" 

  therefore,

  Sum of all positive integers which cannot be written as the sum of two abundant numbers 

  is equal to 

  Sum of all numbers (below 28124) -  Summation of the "sum of two abundant numbers(below 28124)".
*/

// sumOfAllBelow28214 = Sum of all numbers (below 28124)
totalSumOfAllBelow28214 = 0;
for (var i = 0; i < 28214; i++) {
  totalSumOfAllBelow28214 = totalSumOfAllBelow28214 + i;
}

// abundantBelow28214 = Abundant numbers below 28214 (in Array form)
var abundantBelow28214 = [];

for (var i = 12; i < 28124; i++){
     var n = 1;
     var total = 0 ;
  
     for(n; n < i; n++) {
          if(i%n == 0){
             total = total + n;
          } else {
  
          }
      }
 
      if(n < total) {
           abundantBelow28214.push(n);
      }
}

// sumOfAbundantBelow28214 = Sum of two abundant numbers(below 28124).
var sumOfAbundantBelow28214 = new Set();
var counter;
var sumtotal = 0;

var j;
var k;

for(j = 0; j < abundantBelow28214.length; j++) {
     for(k = j; k < abundantBelow28214.length; k++) {
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

