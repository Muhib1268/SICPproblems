
function count_change(amount) {
   return cc(amount,5);
}
function cc(amount,kinds_of_coins) {
   if (amount === 0)
        return 1;
   else if (amount < 0 ||
             kinds_of_coins === 0)
        return 0;
   else return cc(amount,kinds_of_coins - 1)
               +
               cc(amount - first_denomination(
                               kinds_of_coins),
                  kinds_of_coins);
}
function first_denomination(kinds_of_coins) {
   switch(kinds_of_coins) {
      case 1: return 1;     //pennies
      case 2: return 5;     //nickels
      case 3: return 10;    //dimes 
      case 4: return 25;    //quarters
      case 5: return 50;    //half-dollars
   }
}

console.log(count_change(100));
