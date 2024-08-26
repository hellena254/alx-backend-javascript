const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
  it('should return 4 when inputs are 1 and 3', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when inputs are 1 and 3.7', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when inputs are 1.2 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when inputs are 1.5 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  // Add edge cases if needed
  it('should return 0 when both inputs are 0', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should return -2 when inputs are -1.4 and -0.7', function() {
    assert.strictEqual(calculateNumber(-1.4, -0.7), -2);
  });

  it('should return 0 when inputs are 0.1 and 0.2', function() {
    assert.strictEqual(calculateNumber(0.1, 0.2), 0);
  });
});
