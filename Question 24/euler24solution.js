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
*/

for(var n = 9; -1 < n; n--)	{	
	value = counter / factorial(n);	 // 1,000,000/362880 = 2.76
	value = Math.ceil(value);        // 3
	value = value - 1;               // 2

	array.push(numberList[value]);    // array = [2]  

	numberList.splice(value, 1);      
	counter = counter - (value*factorial(n));    
}

console.log(array);			 

/* Extra Notes
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
