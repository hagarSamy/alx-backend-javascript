const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function(){
  it('should return a resolved promise with the correct data when success is true',
    function(){
      return new Promise ((done) => {
        getPaymentTokenFromAPI(true)
        .then(response => {
        expect(response).to.deep.equal({ data:
            'Successful response from the API' });
      });
      })
    });
});
