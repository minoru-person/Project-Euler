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
// Set fibonacci number into array. Array is revesed to make counting easier.
var f1 = [];
var f2 = [];

// output two arrays with 1001 keys.
// f1 = [0,0,0,.........,0];
// f2 = [0,0,0,.........,0];
for(var i = 0; i < 1001; i++){
    f1.push(0);
    f2.push(0);
}

// set the first key to 1.
f1[0]= 1;
f2[0]= 1;

// fibonacci counter set at 2nd term.
var counter = 2;

function fibonacciFunction(f1, f2) {
    var firstNum = 0;
    var n;
    var f3 = [];

      // fibonacci algorithm. Step by step summation for fibonacci number. Executed back to front.
    for (var i = 0; i < (f1.length); i++) {
        n = f1[i] + f2[i] + Number(firstNum);
        if (n < 10) {
            f3[i] = n;
            firstNum = 0;
        } else {
            n = n.toString();
            firstNum = n.substr(0,1);
            var secondNum = n.substr(1,1);
            f3[i] = Number(secondNum);
        }
  
    }
     
    f1 = f2;
    f2 = f3;
  
    // increase counter by 1.
    counter = counter + 1;
  
    if(f2[999]<1) { 
        // if 1000th term is less than zero, execute fibonacci algorithm.
        return fibonacciFunction(f1,f2);
    } else {
        // output counter when fibonacci algorithm reaches 1000th digit.
        console.log(counter);
    }
}

// execute algorithm
fibonacciFunction(f1, f2);




