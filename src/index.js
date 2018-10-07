module.exports = function getZerosCount(number, base) {
  // your implementation
  let primesArr = [];

  for (let i = 2; i <= Math.sqrt(base); i++) {
    if (base % i === 0) {
      while (base % i === 0) {
        base = base / i;
        primesArr.push(i);
      }
    }
  }

  if (base != 1) {
    primesArr.push(base);
  }

  let maxValue = Math.max.apply(null, primesArr);

  let zeros = 0;
  let sum = number;
  let divider = maxValue;

  while (sum >= maxValue) {
    sum = Math.floor(number / divider);
    divider *= maxValue;
    zeros += sum;
  }

  return zeros;
  
}