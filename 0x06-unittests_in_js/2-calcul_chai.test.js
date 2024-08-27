const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

// Test cases for 'SUM' operation
describe('#calculateNumber() with type SUM', () => {
  it('should return 15 when adding 5 and 10', () => {
    expect(calculateNumber('SUM', 5, 10)).to.equal(15);
  });

  it('should return 5 when adding 2 and 2.7', () => {
    expect(calculateNumber('SUM', 2, 2.7)).to.equal(5);
  });

  it('should return 5 when adding 1.0 and 4.0', () => {
    expect(calculateNumber('SUM', 1.0, 4.0)).to.equal(5);
  });

  it('should return 6 when adding 1.7 and 3.5', () => {
    expect(calculateNumber('SUM', 1.7, 3.5)).to.equal(6);
  });

  it('should round down both numbers and return 0 when adding 0.1 and 0.3', () => {
    expect(calculateNumber('SUM', 0.1, 0.3)).to.equal(0);
  });

  it('should handle adding -0.7 and 0.7 and return 0', () => {
    expect(calculateNumber('SUM', -0.7, 0.7)).to.equal(0);
  });

  it('should handle adding -0.8 and -0.7 and return -2', () => {
    expect(calculateNumber('SUM', -0.8, -0.7)).to.equal(-2);
  });
});

// Test cases for 'SUBTRACT' operation
describe('#calculateNumber() with type SUBTRACT', () => {
  it('should return -2 when subtracting 3 from 1', () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
  });

  it('should return -4 when subtracting 4.5 from 1.4', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should return -3 when subtracting 3.7 from 1.2', () => {
    expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
  });

  it('should return -2 when subtracting 3.7 from 1.5', () => {
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
  });

  it('should return 0 when subtracting 0.3 from 0.1', () => {
    expect(calculateNumber('SUBTRACT', 0.1, 0.3)).to.equal(0);
  });

  it('should return -2 when subtracting 0.7 from -0.7', () => {
    expect(calculateNumber('SUBTRACT', -0.7, 0.7)).to.equal(-2);
  });

  it('should return 0 when subtracting -0.7 from -0.8', () => {
    expect(calculateNumber('SUBTRACT', -0.8, -0.7)).to.equal(0);
  });

  it('should return 1 when subtracting -0.4 from 0.8', () => {
    expect(calculateNumber('SUBTRACT', 0.8, -0.4)).to.equal(1);
  });
});

// Test cases for 'DIVIDE' operation
describe('#calculateNumber() with type DIVIDE', () => {
  it('should return 0.25 when dividing 1 by 4', () => {
    expect(calculateNumber('DIVIDE', 1, 4)).to.equal(0.25);
  });

  it('should return 0.25 when dividing 1 by 3.7', () => {
    expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
  });

  it('should return 0.2 when dividing 1.4 by 4.5', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should return 1 when dividing 1.6 by 2.4', () => {
    expect(calculateNumber('DIVIDE', 1.6, 2.4)).to.equal(1);
  });

  it('should return 2 when dividing 4.2 by 1.5', () => {
    expect(calculateNumber('DIVIDE', 4.2, 1.5)).to.equal(2);
  });

  it("should return 'Error' when dividing 1.3 by 0.3", () => {
    expect(calculateNumber('DIVIDE', 1.3, 0.3)).to.equal('Error');
  });

  it('should return -1 when dividing -0.7 by 0.7', () => {
    expect(calculateNumber('DIVIDE', -0.7, 0.7)).to.equal(-1);
  });

  it('should return 1 when dividing -0.8 by -0.7', () => {
    expect(calculateNumber('DIVIDE', -0.8, -0.7)).to.equal(1);
  });

  it('should return -22 when dividing -44.5 by 2.4', () => {
    expect(calculateNumber('DIVIDE', -44.5, 2.4)).to.equal(-22);
  });

  it('should return 22 when dividing -88.5 by -3.6', () => {
    expect(calculateNumber('DIVIDE', -88.5, -3.6)).to.equal(22);
  });
});

