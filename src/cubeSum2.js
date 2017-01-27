function cube(x) {
   return x * x * x;
}
function sum(term,a,next,b) {
   if (a > b)
        return 0;
   else return term(a) +
               sum(term,next(a),next,b);
}

function inc(n) {
   return n + 1;
}
function sum_cubes(a,b) {
   return sum(cube,a,inc,b);
}
