function fib(n) {
   return fib_iter(1,0,n);
}
function fib_iter(a,b,count) {
   if (count === 0)
        return b;
   else return fib_iter(a + b,a,count - 1);
}

// example

console.log(fib(6));

function fibRec(n) {
   if (n === 0)
        return 0;
   else if (n === 1)
        return 1;
   else return fibRec(n - 1) + fibRec(n - 2);
}

// example

console.log(fibRec(50));
