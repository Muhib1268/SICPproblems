function priceChange(del)
{
  return (del/.1)*15;
}
function avgAttendee(price)
{
  var diff=price-5.0;
  return 120-priceChange(diff);
}

function revenue(price)
{
  return price*avgAttendee(price);
}

function runningCost(price)
{
  return 180+(.04*avgAttendee(price));
}

function profit(price)
{
  return revenue(price)-runningCost(price);
}
function findOptimum(lo, hi)
{
  var c=(hi-lo)/.01;
  var optimum;
  var price=lo;
  function optimumProfit(num)
  {
    optimum=optimum>num? optimum:num;
  }
  for(var i=1; i<=c; i++)
  {
    optimumProfit(profit(lo+i*.01));
  }
  return optimum;
}
function businessPlan(hi, lo)
{
  findOptimum(hi, lo);
}
console.log(findOptimum(2.5, 4));
