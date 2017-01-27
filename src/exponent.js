function expt(b,n) {
   if (n === 0)
        return 1;
   else return b * expt(b, n - 1);
}

function expt(b,n) {
   return expt_iter(b,n,1);
}
function expt_iter(b,counter,product) {
   if (counter === 0)
        return product;
   else return expt_iter(b,
                         counter - 1,
                         b * product);
}

function fast_expt(b,n) {
   if (n === 0)
        return 1;
   else if (is_even(n))
        return square(fast_expt(b, n / 2));
   else return b * fast_expt(b, n - 1);
}

function square(x) { return x * x; };
function is_even(n) {
   return n % 2 === 0;
}

console.log(expt(3,5));
