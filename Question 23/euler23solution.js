/* 

QUESTION

A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.
As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.
Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

ANSWER

"All integers greater than 28123 can be written as the sum of two abundant numbers" therefore,

  Sum of all positive integers which cannot be written as the sum of two abundant numbers 
= Sum of all numbers (below 28124) - Total sum of two abundant numbers(below 28124).

*/

//total49 = Sum of all numbers (below 28124)
total49 = 0;
for (i=0; i<28214; i++)
{
   total49=total49+i;
}

//Abundant49 = Abundant numbers below 28213 (in Array form)
var Abundant49 = [];

for (i=12; i<28124; i++){
  var n=1;
  var total = 0 ;
  
 for(n; n<i; n++) {
  if(i%n==0){
    total = total + n;
  } else {
  
  }
 }
 
 if(n<total) {
   Abundant49.push(n);
 }
}

//New 50 = Sum of two abundant numbers(below 28124).
var New50 =new Set();
var g;
var sumtotal = 0;

for(j=0; j<Abundant49.length; j++)
{
   for(i=j; i<Abundant49.length; i++)
   {
        g = Abundant49[i]+Abundant49[j];
		
		if(g<28214){
		 New50.add(g);	
       }
   }
}

//totalSet = Sum of New 50.
var totalSet = 0;

for(let item of New50){
   totalSet = totalSet + item;
}

//Subtract "total49" from "totalSet".
var sum49 = total49-totalSet;

console.log(sum49);
