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

    // From codeacademy tutorial (codeacademy.com)
    function factorial(n) {
        if(n === 0) {
       	return 1;
    }
		 
    //This is it recursion!!
    return n * factorial(n-1);
}

var value;
var array = [];
var counter = 1000000;	
var numberList = [0,1,2,3,4,5,6,7,8,9];

/*
My Solution was derived from this webpage (See Combinatorics)
http://www.mathblog.dk/project-euler-24-millionth-lexicographic-permutation/

"First we want to figure out, which number is first in the millionth lexicographical permutation. 
The last nine digits can be ordered in 9! = 362880 ways. So the first 362880 permutations start with a 0. 
The permutations from 362881 to 725760 start with a 1 and then the permutations from 725761 to 1088640 starts with a 2. 
Based on that it is clear that the millionth permutation is in the third interval, and thus must start with a 2. etc "

So the answer starts with a 2.

The last eight digits can be ordered in 8! = 40320 ways. 
So the first 40320 permutation starts with a 0. 
The permutation from 40321 to 80640 starts with a 1.
The permutation from 80641 to 120960 starts with a 3 (becaus 2 is already taken).
The permutation from 120961 to 241920 starts with a 4.
The permuation from 241921 to 362880 starts with a 5.
The permuation from 362881 to 725760 starts with a 6.
The permuation from 725761 to 1088640 starts with a 7.
Based on that it is clear that millionth permuation is in the 7th interval, and thus must start with 27.etc "

So the answer starst with a 2 and then 7.

1st term is                        [0,1,2,3,4,5,6,7,8,9]
2nd term is                        [0,1,2,3,4,5,6,7,9,8]
...
362,880 (or 9!) term is            [0,9,8,7,6,5,4,3,2,1]
...
725,760 (or 362,880 x 2) term is   [1,9,8,7,6,5,4,3,2,0]
725,761 term is                    [2,0,1,3,4,5,6,7,8,9]                    
...
1,088,640 (or 362,880 x 3) term is [2,9,8,7,6,5,4,3,1,0]
...
3,628,800 (or 10!) term is         [9,8,7,6,5,4,3,2,1,0]

*/

for(var n = 9; -1 < n; n--){	
    value = counter / factorial(n);	 // 1,000,000/362880 = 2.76
    value = Math.ceil(value);        // 3
    value = value - 1;               // 2, the millionth permutation starts with a 2.

    array.push(numberList[value]);   // Add 3rd item of numberList to array, 
	                                 // i.e. array = [2]

    numberList.splice(value, 1);     // Remove 3rd item from numberList. 
	                                 // i.e. numberList = [0,1,3,4,5,6,7,8,9] 
	
    counter = counter - (value*factorial(n)); // 274240 = 100000 - (2*362800)   
}

console.log(array);			 




