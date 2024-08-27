const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return the correct response when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        try {
          expect(res).to.deep.equal({ data: 'Successful response from the API' });
          done();
        } catch (error) {
          done(error); // Pass the error to the done callback
        }
      })
      .catch(done); // Handle any unexpected rejections
  });
});

