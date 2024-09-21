const sinon = require('sinon');
const Utils = require('./utils.js');
const chai = require('chai');
const sendPaymentRequestToApi = require('./4-payment');


describe('sendPaymentRequestToApi' , function(){
  it('should call Utils.calculateNumber with SUM, 100, and 20', function(){
    const expect = chai.expect;
    const calculateNumberStub = sinon.stub(Utils,
        'calculateNumber').returns(120);
    const consoleLogSpy = sinon.spy(console, 'log');
    it('should call Utils.calculateNumber with SUM, 100, and 20', function() {
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    });
    it('should log the correct total', function() {
      sendPaymentRequestToApi(100, 20);
      expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    })
  });
});
