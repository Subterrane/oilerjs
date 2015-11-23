# oilerjs

A collection of functions useful for solving Project Euler problems

## Installation

npm install oilerjs

## Example

    var oiler = require('oilerjs');
    
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

## Documentation

### `var Oiler = function ()`

 * **Constructor**

### `Oiler.prototype.getPrimeFactors = function primeFactorization(n)`

Get the prime factors of 'n'. Shout-out: http://www.coderenaissance.com/2011/06/finding-prime-factors-in-javascript.html

 * **Parameters:** `n` — 
 * **Returns:** `*|Array` — 

### `Oiler.prototype.isEven = function (n)`

Is 'n' an even number? Embarrassingly simple.

 * **Parameters:** `n` — 
 * **Returns:** `boolean` — 

### `Oiler.prototype.isGoldbachsOtherConjecture = function (n)`

Goldbach's other conjecture It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square. (It turns out that the conjecture was false.)

 * **Parameters:** `n` — 
 * **Returns:** `boolean` — 

### `Oiler.prototype.isPandigital = function (n)`

Is 'n' a pandigital number?

 * **Parameters:** `n` — 
 * **Returns:** `boolean` — 

### `Oiler.prototype.isPentagonal = function (n)`

Is 'n' a pentagonal number? I don't know where I found this formula.

 * **Parameters:** `n` — 
 * **Returns:** `boolean` — 

### `Oiler.prototype.isPermutation = function (n, m)`

Are n and m permutations of each other? Ugly, but works. Seems like there's a more elegant solution.

 * **Parameters:**
   * `n` — 
   * `m` — 
 * **Returns:** `boolean` — 

### `Oiler.prototype.isPrime = function (n)`

Is 'n' a prime number? Shout-out: http://en.wikipedia.org/wiki/Primality_test

 * **Parameters:** `n` — 
 * **Returns:** `boolean` — 

## License

The MIT License (MIT)

Copyright (c) 2015 Will Munslow

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
