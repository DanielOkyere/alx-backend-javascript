/**
 * Tests with Sinon
 */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const bigBrother = sinon.spy(console);
    const dummy = sinon.stub(Utils, 'calculateNumber');
    dummy.returns(10);
    sendPaymentRequestToApi(100, 20);
    const result = dummy.calledWith('SUM', 100, 20);
    expect(result).to.be.equal(true);
    expect(dummy.callCount).to.be.equal(1);
    expect(bigBrother.log.calledWith('The total is: 10')).to.equal(true);
    expect(bigBrother.log.callCount).to.be.equal(1);
    dummy.restore();
    bigBrother.log.restore();
  });
});
