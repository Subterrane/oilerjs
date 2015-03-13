/**
 *
 * @constructor
 */
var Oiler = function () {
};

/**
 * Get the prime factors of 'n'.
 * Shout-out: http://www.coderenaissance.com/2011/06/finding-prime-factors-in-javascript.html
 *
 * @param n
 * @returns {*|Array}
 */
Oiler.prototype.getPrimeFactors = function primeFactorization(n) {
    var root = Math.sqrt(n),
        result = arguments[1] || [],  // get unnamed parameter from recursive calls
        x = 2;

    if (n % x) { // if not divisible by 2
        x = 3; // assign first odd
        while ((n % x) && ((x = x + 2) < root)) {
        } // iterate odds
    }

    // if no factor found then num is prime
    x = (x <= root) ? x : n;
    result.push(x); //push latest prime factor

    // if num isn't prime factor make recursive call
    return (x === n) ? result : primeFactorization(n / x, result);
};

/**
 * Is 'n' a prime number?
 * Embarrassingly simple.
 *
 * @param n
 * @returns {boolean}
 */
Oiler.prototype.isEven = function (n) {
    return n % 2 === 0;
};

/**
 * Goldbach's other conjecture
 * It was proposed by Christian Goldbach that every odd composite number can
 * be written as the sum of a prime and twice a square.
 * (It turns out that the conjecture was false.)
 *
 * @param n
 * @returns {boolean}
 */
Oiler.prototype.isGoldbachsOtherConjecture = function (n) {
    var self = this;
    var diff;
    if (self.isEven(n)) {
        return false;
    }
    for (var i = 1; 2 * (i * i) < n; i++) {
        diff = n - 2 * (i * i);
        if (self.isPrime(diff)) {
            return true;
        }
    }
    return false;
};

/**
 * Is 'n' a pandigital number?
 *
 * @param n
 * @returns {boolean}
 */
Oiler.prototype.isPandigital = function (n) {
    if (n % 9 !== 0) return false;
    var masks = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
        bits = 0;
    do {
        bits = bits | masks[n % 10];
        n = Math.floor(n / 10);
    } while (n > 0);
    return bits == 1023;
};

/**
 * Is 'n' a pentagonal number?
 * I don't know where I found this formula.
 *
 * @param n
 * @returns {boolean}
 */
Oiler.prototype.isPentagonal = function (n) {
    return (Math.sqrt((n * 24) + 1) + 1) % 6 == 0;
};

/**
 * Are n and m permutations of each other?
 * Ugly, but works. Seems like there's a more elegant solution.
 *
 * @param n
 * @param m
 * @returns {boolean}
 */
Oiler.prototype.isPermutation = function (n, m) {
    n = n.toString().split("").map(Number).sort().join('');
    m = m.toString().split("").map(Number).sort().join('');
    return n == m;
};

/**
 * Is 'n' a prime number?
 * Shout-out: http://en.wikipedia.org/wiki/Primality_test
 *
 * @param n
 * @returns {boolean}
 */
Oiler.prototype.isPrime = function (n) {
    if (n <= 3) {
        return n > 1;
    }
    if (n % 2 == 0 || n % 3 == 0) {
        return false;
    }
    for (var i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false;
        }
    }
    return true;
};

module.exports = new Oiler();
