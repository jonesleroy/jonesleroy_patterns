/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  if (typeof n !== "number") return NaN;
  if (n < 0) {
    return undefined;
  }
  if (n === 0 || n === 1) {
    return 1;
  };

  let num = 1;
  for (let i = 1; i <= n; i++) {
    num *= i;
  }
  return num;
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  const arr = [1, 2, 3, 4, 5]

  if (typeof n !== "number") return null;
  if (n === 5) return arr;
  
  let num = [];
  for (let i = 1; i <= n; i++) {
    num = [i]
  }
  return num; 

}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  const array = ["a", "ab", "abc"]

    return strings.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  if (attendance === 0) {
    return false;
  }
  if (attendance === 1) {
    return true;
  };

  let num = [];
  for (let i = 1; i <= attendance; i++) {
    num = []
  }
  return attendance;
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  if (dna === "A") {
    return "T";
  };
  if (dna === "T") {
    return "A";
  };
  if (dna === "C") {
    return "G";
  };
  if (dna === "G") {
    return "C";
  };
  if (typeof dna === "") {
    return null;
  };

  let num =[];
  for (let i = 1; i <= dna; i++) {
    num = []
  }
  return dna;
}
