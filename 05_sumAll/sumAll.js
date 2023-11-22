const sumAll = function(min,max) {
 let total = 0;
if (!Number.isInteger(max) || !Number.isInteger(min)){
 return "ERROR";

}else if(max <0|| min <0){
  return "ERROR";

 } else if (max > min){
 for(let i = min;i<=max;i++){
  total += i;
 }
 return total;
} else {
 for (let i = max;i<=min;i++){
  total +=i;
 }
 return total;

}
}



// Do not edit below this line
module.exports = sumAll;
