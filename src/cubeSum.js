function cube(x) {
   return x * x * x;
}

function sum_integers(a,b) {
   if (a > b)
        return 0;
   else return a + sum_integers(a + 1,b);
}

function sum_cubes(a,b) {
   if (a > b)
        return 0;
   else return cube(a) + sum_cubes(a + 1,b);
}

function identity(x) {
   return x;
}

function sum_integers(a,b) {
   return sum(identity,a,inc,b);
}
