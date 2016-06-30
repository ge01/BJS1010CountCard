/*******************************************************************************
In the casino game Blackjack, a player can gain an advantage over the house by
keeping track of the relative number of high and low cards remaining in the
deck. This is called Card Counting.

https://en.wikipedia.org/wiki/Card_counting

Having more high cards remaining in the deck favors the player. Each card is
assigned a value according to the table below. When the count is positive, the
player should bet high. When the count is zero or negative, the player should
bet low.

Count Change	 Cards
+1	           2, 3, 4, 5, 6
0	             7, 8, 9
-1	           10, 'J', 'Q', 'K', 'A'

You will write a card counting function. It will receive a card parameter and
increment or decrement the global count variable according to the card's value
(see table). The function will then return a string with the current count and
the string "Bet" if the count is positive, or "Hold" if the count is zero or
negative. The current count and the player's decision ("Bet" or "Hold") should
be separated by a single space

Example Output
"-3 Hold"
"5 Bet"

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.

*******************************************************************************/
// Variable to hold the card counting
var count = 0;

// Card counting function
function cc(card) {

    // Assign a -1, 0, or 1 to "count" based on "card" value
    if (card == 7 | card == 8 | card == 9) {
        /* do nothing */
    } else if (card == 2 | card == 3 | card == 4 | card == 5 | card == 6) {
        count++;
    } else {
        count--;
    }

    // Return "count" total and action to take
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }

}

// Test values
cc(2);
cc(3);
cc(4);
cc(5);
console.log(cc(6)); // count = 5
//cc(7); cc(8); console.log(cc(9));  // count = 0
//cc(10); cc('J'); cc('Q'); cc('K'); console.log(cc('A')); // count = -5
