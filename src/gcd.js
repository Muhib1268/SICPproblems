function gcd(a,b) {
   return b === 0 ? a : gcd(b, a % b);
}
console.log(gcd(96, 144));
