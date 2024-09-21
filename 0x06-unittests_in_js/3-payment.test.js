const sendPaymentRequestToApi = require('./3-payment.js')
const sinon = require('sinon')
const { expect } = require('chai');


describe('spy sendPaymentRequestToApi' , function(){
  it('should call Utils.calculateNumber with SUM, 100, and 20', function(){
  const spy = sinon.spy(Utils, 'calculateNumber');
  sendPaymentRequestToApi(100, 20);
  expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });
});
