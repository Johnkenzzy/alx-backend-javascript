const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return sum of two integers', () => {
    assert.strictEqual(calculateNumber(3, 4), 7);
    assert.strictEqual(calculateNumber(' 4 ', '5'), 9);
    assert.strictEqual(calculateNumber('1e2', '3e1'), 130);
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(calculateNumber(-5, -10), -15);
    assert.strictEqual(calculateNumber(10, -3), 7);
  });

  it('should return sum when one argument is a numeric string', () => {
    assert.strictEqual(calculateNumber('5', 10), 15);
  });

  it('should return sum when both arguments are numeric strings', () => {
    assert.strictEqual(calculateNumber('7', '3'), 10);
  });

  it('should return NaN if one argument is non-numeric string', () => {
    assert.ok(isNaN(calculateNumber('abc', 3)));
  });

  it('should return NaN if both arguments are non-numeric strings', () => {
    assert.ok(isNaN(calculateNumber('abc', 'xyz')));
  });

  it('should handle float numbers properly', () => {
    assert.strictEqual(calculateNumber(1.2, 2.8), 4);
  });

  it('should return 0 for empty strings', () => {
    assert.strictEqual(calculateNumber('', ''), 0);
  });

  it('should return NaN if one argument is undefined', () => {
    assert.ok(isNaN(calculateNumber(undefined, 5)));
  });

  it('should return NaN if both arguments are undefined', () => {
    assert.ok(isNaN(calculateNumber(undefined, undefined)));
  });

  it('should treat null as 0', () => {
    assert.strictEqual(calculateNumber(null, 5), 5);
    assert.strictEqual(calculateNumber(null, null), 0);
  });

  it('should return NaN for object inputs', () => {
    assert.ok(isNaN(calculateNumber({}, 2)));
  });

  it('should treat empty array as 0', () => {
    assert.strictEqual(calculateNumber([], 3), 3);
    assert.strictEqual(calculateNumber([], []), 0);
  });

  it('should return NaN for Symbol input', () => {
    try {
      calculateNumber(Symbol(), 1);
    } catch (err) {
      assert.strictEqual(err instanceof TypeError, true);
    }
  });

  it('should handle Infinity and -Infinity', () => {
    assert.strictEqual(calculateNumber(Infinity, 1), Infinity);
    assert.strictEqual(calculateNumber(-Infinity, 1), -Infinity);
  });

  it('should handle missing arguments', () => {
    assert.ok(isNaN(calculateNumber(5)));
    assert.ok(isNaN(calculateNumber()));
  });

  it('should handle boolean values', () => {
    assert.strictEqual(calculateNumber(true, false), 1);
    assert.strictEqual(calculateNumber(true, true), 2);
  });

  it('should handle very large numbers', () => {
    assert.strictEqual(calculateNumber(1e308, 1e308), Infinity);
  });
});
