function pi_sum(a,b) {
   function pi_term(x) {
      return 1.0 / (x * (x + 2));
   }
   function pi_next(x) {
      return x + 4;
   }
   return sum(pi_term,a,pi_next,b);
}

function pi_sum(a,b) {
   if (a > b)
        return 0;
   else return 1.0 / (a * (a + 2)) +
               pi_sum(a + 4,b);
}
function pi_sum(a,b) {
   return sum(function(x) { return 1.0 / (x * (x + 2)); },
              a,
              function(x) { return x + 4; },
              b);
}

8 * pi_sum(1,1000);
