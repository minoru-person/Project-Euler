  /*
  The sum of a 1001 by 1001 spiral comprises of

  1+(3 + 5 + 7 + 9)                       +(13 + 17 + 21 + 25)+ ... 
  OR 
  1+(outer corner values of 3 by 3 spiral)+(outer corner values of 5 by 5 spiral)+...+(outer corner values of 1001 by 1001 spiral). 
  
  I created a function called fourCornerSum(). 
  It sums up all the outer corner values for each spiral and add to a variable called final total.

  The values for each corner can be calculated by subtracting (spiral-1) from each the largest corner value, which is (spiral^2).
  */
  
  let finalTotal = 0;

  function fourCornerSum(spiral) {
     let cornerTotal = 0; //this variable needs to be reset for each spiral, therefore it is contained within the function.
  
     for (i = spiral*spiral, counter = 1; counter <= 4; i = i-(spiral-1)) {
	       cornerTotal = cornerTotal + i;
	       counter++;			     
     }				   
      finalTotal = finalTotal + cornerTotal;  
  }

  //Sum of corners for all spiral starting from 3 by 3, to 1001 by 1001.  	 				      
  for (j = 3; j <= 1001; j = j+2) {
        fourCornerSum(j);
  }

  //The value in the middle of the spiral is 1. Add 1 to the final value. 		    
  console.log(finalTotal+1);
