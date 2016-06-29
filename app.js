var count = 0;

function cc(card) {
 // Only change code below this line
 if (card == (2 | 3 | 4 | 5 |6)) {
   count = 1;
 } else if (card == (10 | 'J' | 'Q' | 'K' | 'A')) {
   count = -1;
 }
 //console.log(count + " ");

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
cc(2);
// cc(3); cc(7); cc('K'); cc('A');
