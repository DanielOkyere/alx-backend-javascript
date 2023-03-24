/**
 * Test Scripts
 */
const assert = require('assert');
const calcul = require('./0-calcul');

describe('Test 0-calcul', () => {
  it('Checks the sum of the numbers', () => {
    const result = calcul(1, 2);
    assert(result === 3, 'result is 3');
  });
  it('rounding down b\'s floating point fractional number', () => {
    assert.strictEqual(calcul(1.0, 2.4), 3);
  });

  it('rounding down a and b\'s floating point fractional number', () => {
    assert.strictEqual(calcul(1.4, 2.4), 3);
  });

  it('rounding down a\'s floating point fractional number', () => {
    assert.strictEqual(calcul(1.4, 2.0), 3);
  });

  it('rounding up b\'s floating point fractional numbers', () => {
    assert.strictEqual(calcul(1.0, 2.5), 4);
  });

  it('rounding up a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calcul(2.6, 2.5), 6);
  });

  it('rounding up a\'s floating point fractional numbers', () => {
    assert.strictEqual(calcul(2.6, 2.0), 5);
  });

  it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calcul(2.499999, 3.499999), 5);
  });
});
