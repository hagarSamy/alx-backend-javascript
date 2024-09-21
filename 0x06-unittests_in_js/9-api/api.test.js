const sinon = require('sinon');
const request = require('request');
const expect = require('chai').expect;

describe('Index page', () => {
  it('should return status code 200', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct result', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('should return status code 200 when :id is a number', (done) => {
    request('http://localhost:7865/cart/123', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return status code 404 when :id is NOT a number', (done) => {
    request('http://localhost:7865/cart/abc', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return correct result when :id is a number', (done) => {
    request('http://localhost:7865/cart/123', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('should return correct error message when :id is NOT a number', (done) => {
    request('http://localhost:7865/cart/abc', (error, response, body) => {
      expect(body).to.equal('Invalid cart ID. Please provide a valid number.');
      done();
    });
  });
});
