// Set fibonacci number into array. Array is revesed to make counting easier.
var f1 = [];
var f2 = [];

// output two arrays up to 1001 digits long.
// f1 = [0,0,0,.........,0];
// f2 = [0,0,0,.........,0];
for(var i = 0; i < 1001; i++){
 f1.push(0);
 f2.push(0);
}

// set the first terms to 1.
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
  
      if (f2[999]<1) { 
            // if 1000th term is less than zero, execute fibonacci algorithm.
            return fibonacciFunction(f1,f2);
       } else {
            // output counter when fibonacci algorithm reaches 1000th digit.
            console.log(counter);
       }
}

// execute algorithm
fibonacciFunction(f1, f2);

