function sqrt_iter(guess,x) {
   if (good_enough(guess,x))
      return guess;
   else
      return sqrt_iter(improve(guess,x), x);
}


function average(x,y) {
   return (x + y) / 2;
}

function improve(guess,x) {
   return average(guess,x / guess);
}

function average(x,y) {
   return (x + y) / 2;
}
function square(x) { return x * x; };

function indices(x, y)
{
	var p=x;
	for(var i=1; i<y; i++)
	{
		p=p*x;
	}
	return p;
}
	
function improveIndices(guess, x, r) {
	var div=indices(guess, r-1);
   return average(guess,x / div);
}

function surds_iter(guess, x, r) {
   if (good_enoughIndices(guess, x , r))
      return guess;
   else
      return surds_iter(improveIndices(guess, x, r), x, r);
} 

function good_enoughIndices(guess,x, r){
    return abs(indices(guess, r) - x) < 0.001;
}
function good_enough(guess,x) {
    return abs(square(guess) - x) < 0.001;
}

function surds(x, y) {
   return surds_iter(1.0 ,x , y);
}
function sqrt(x) {
   return sqrt_iter(1.0,x);
}

function abs(x) {
   return x >= 0 ? x : -x;
}

console.log(surds(32, 5));
