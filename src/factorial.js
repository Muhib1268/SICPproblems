function factorial(n) {
   return fact_iter(1,1,n);
}
//Linear Iteretive process
function fact_iter(product,counter,max_count) {
   return counter > max_count
          ? product
          : fact_iter(counter*product,
                      counter+1,
                      max_count);
}
// function fact_iter(product,counter,max_count) {
//    if (counter > max_count)
//         return product;
//    else return fact_iter(counter*product,
//                          counter+1,
//                          max_count);
// }
console.log(factorial(5));
function factorialRec(n) {
   return n === 1 ? 1 : n * factorialRec(n-1);
}
console.log(factorialRec(6));
