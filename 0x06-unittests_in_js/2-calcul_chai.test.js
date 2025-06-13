const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber with Chai', () => {
  describe('SUM', () => {
    it('should return 6 for (1.4, 4.5)', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 5 for (2.6, 2.3)', () => {
      expect(calculateNumber('SUM', 2.6, 2.3)).to.equal(5);
    });

    it('should handle negative numbers', () => {
      expect(calculateNumber('SUM', -1.4, -3.6)).to.equal(-5);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 for (1.4, 4.5)', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 1 for (3.6, 2.5)', () => {
      expect(calculateNumber('SUBTRACT', 3.6, 2.5)).to.equal(1);
    });

    it('should handle negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -1.6, -3.6)).to.equal(2);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 for (1.4, 4.5)', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 1.4, 0.3)).to.equal('Error');
    });

    it('should handle negative division', () => {
      expect(calculateNumber('DIVIDE', -4.5, 2)).to.equal(-2);
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for invalid type', () => {
      expect(() => calculateNumber('MULTIPLY', 1, 2)).to.throw('Invalid type');
    });
  });
});
