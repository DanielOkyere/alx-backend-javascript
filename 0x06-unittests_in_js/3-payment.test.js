/**
 * Tests with Sinon
 */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const bigBrother = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    const result = bigBrother.calculateNumber.calledWith('SUM', 100, 20);
    expect(result).to.be.equal(true);
    expect(bigBrother.calculateNumber.callCount).to.be.equal(1);
    bigBrother.calculateNumber.restore();
  });
});
