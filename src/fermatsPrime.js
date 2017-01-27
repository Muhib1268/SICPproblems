function is_even(n) {
   return n % 2 === 0;
}

function square(x) { return x * x; }

function expmod(base,exp,m) {
   if (exp === 0)
        return 1;
   else if (is_even(exp))
        return square(expmod(base,exp/2,m)) % m;
   else return (base * expmod(base,exp - 1,m)) % m;
}

function random(n) {
   return Math.floor(Math.random() * n);
}

function fermat_test(n) {
   function try_it(a) {
      return expmod(a,n,n) === a;
   }
   return try_it(1 + random(n - 1));
}

function fermat_test(n) {
   function try_it(a) {
      return expmod(a,n,n) === a;
   }
   return try_it(1 + random(n - 1));
}
function fast_is_prime(n,times) {
   if (times === 0)
        return true;
   else if (fermat_test(n))
        return fast_is_prime(n, times - 1);
   else return false;
}

// example

console.log(fast_is_prime(91,3));;
