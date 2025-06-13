const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 for (1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 5 for (2.6, 2.3)', () => {
      assert.strictEqual(calculateNumber('SUM', 2.6, 2.3), 5);
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, -3.6), -5);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 for (1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 1 for (3.6, 2.5)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.6, 2.5), 1);
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.6, -3.6), 2);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 for (1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.3), 'Error'); // rounds to 0
    });

    it('should handle negative division', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -4.5, 2), -2);
    });
  });

  describe('Invalid type', () => {
    it('should throw error for invalid operation type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1, 2), /Invalid type/);
    });
  });
});
