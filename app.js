/*******************************************
Count Change	 Cards
+1	           2, 3, 4, 5, 6
0	             7, 8, 9
-1	           10, 'J', 'Q', 'K', 'A'
********************************************/

var count = 0;

function cc(card) {
 // Only change code below this line
 if (card === 0){
   // do nothing
 } else if (card == 2 | card == 3 | card == 4 | card == 5 | card == 6) {
   count++;
 } else  {
   count--;
 }
 //console.log(count);

 if (count > 0){
   console.log(count + " Bet");
   return count + " Bet";
 }
 else {
   console.log(count + " Hold");
   return count + " Hold";
 }
 // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
//
