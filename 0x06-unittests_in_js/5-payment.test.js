const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./5-payment');


describe('hhoking sendPaymentRequestToApi', function(){
  beforeEach(function() {
    consoleLogSpy = sinon.spy(console, 'log');
  });
  afterEach(function() {
	console.log.restore();
  });
  it('should log "The total is: 120" when called with 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });
  it('should log "The total is: 20" when called with 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
