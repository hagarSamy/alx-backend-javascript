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

describe('Login endpoint', () => {
  it('should return the message "Welcome :username"', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName: 'Betty'
      })
    };
    request(options, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});

describe('Available payments endpoint', () => {
  it('should return an object with credit_cards and paypal properties', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      const paymentMethods = JSON.parse(body).payment_methods;
      expect(paymentMethods).to.deep.equal({
        credit_cards: true,
        paypal: false
      });
      done();
    });
  });
});
