const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return sum of two integers', () => {
    assert.strictEqual(calculateNumber(3, 4), 7);
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
  });
});
