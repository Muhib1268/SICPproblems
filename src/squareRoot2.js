
function square(x) { return x * x; }
                
function average(x,y) {
   return (x + y) / 2;
}
              
function sqrt(x) {
   function good_enough(guess,x) {
      return abs(square(guess) - x) < 0.001;
   }
   function improve(guess,x) {
      return average(guess,x / guess);
   }
   function sqrt_iter(guess,x) {
      if (good_enough(guess,x))
           return guess;
      else return sqrt_iter(improve(guess,x),x);
   }
   return sqrt_iter(1.0,x);
}