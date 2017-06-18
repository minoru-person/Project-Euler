
// Using Long Division, "longdivisionPartA" function generates the decimal representation for a given dividend/divider.
// It stores the decimal representation in an array called "array". 
// the remainder is tracked in the array "arraydividend".
// the function terminates when the remainder goes to "0" 
// OR
// when the function detects a duplicate remainder in array "arraydividend".
// decimal representation kept in an array called array

var array = [];

// arraydividend keeps track of the remainder in the long division. "0" is inserted.

var arraydividend = [0];
    
// longdivisionPartA is the first line of the long division. Determines the decimal place of long division.
 
/*
NOTE: dividend corresponds to the number that is divided in each line of the long division. 
Therefore it changes after step in the long division. 
NOTE: the divider remains the same throughout the whole function.
*/

function longdivisionPartA(dividend, divider){
       while (dividend < divider) {
               dividend = dividend * 10;
               array.push(0); 
       } 
 
       arraydividend.push(dividend);
 
  return longdivisionPartB(dividend, divider);
} 

// longdivisionPartB is the rest of the long division. 

function longdivisionPartB(dividend, divider){  
       var i = 9; 
       while( dividend < divider*i ){
                   i--;           
       } 
  
       array.push(i);
  
  // The New dividend is calculated
  dividend = dividend - divider * i;
  dividend = dividend * 10;
  
  // if the new dividend is the same as the one found in arraydividend, the function is terminated.
  for(i = 0; i < arraydividend.length; i++){
    if(arraydividend[i] == dividend){
	   return array;
       }
   }
	
   arraydividend.push(dividend);
	
   // The function is repeated, until the recurring decimal is determined 
   return longdivisionPartB(dividend, divider);
}

/* 
Test to see if longdivisionPartA function works 
console.log(longdivisionPartA(1,80));

create a list of 1/b for b=2 to b=999.
Identify b with the longest recurring decimal and save as answer1.
Output the answer, value of answer1.
*/

var array1 = 0;
var answer1;
for(var b = 2; b < 1000; b++) {
    longdivisionPartA(1, b);
	if(array.length > array1){
	    array1 = array.length;
	   answer1 = b;
	}
	  var array = [];
      var arraydividend = [0];
}
console.log(answer1);

