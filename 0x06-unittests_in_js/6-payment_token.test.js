/**
 * Unit test
 */
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('getPayment from token, success should be true', (done) => {
    getPaymentTokenFromAPI(true).then((res) => {
      expect(res).to.deep.equal({ data: 'Successful response from the API' });
      done();
    });
  });
});
