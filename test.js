var oiler = require('./oiler.js');

var primes = oiler.getPrimeFactors(1023);
console.log(primes); // [ 3, 11, 31 ]

var even = oiler.isEven(1023);
console.log(even); // false

var goc = oiler.isGoldbachsOtherConjecture(1023);
console.log(goc); // true

var pandigital = oiler.isPandigital(1023456789);
console.log(pandigital); // true

var pentagonal = oiler.isPentagonal(477);
console.log(pentagonal); // true

var permuation = oiler.isPermutation(1234, 3241);
console.log(permuation); // true

var prime = oiler.isPrime(91);
console.log(prime); // false
