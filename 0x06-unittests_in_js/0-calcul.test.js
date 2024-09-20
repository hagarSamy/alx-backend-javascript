const assert = require('assert');
const calculateNumber = require('./0-calcul.js')


describe('calculateNumber' , function(){
    it('should return 4 for 1, 3 inputs', function(){
        let result = calculateNumber(1, 3);
        assert.strictEqual(result, 4);
    });
    it('should return 5 for 1, 3.7 inputs', function(){
        let result = calculateNumber(1, 3.7);
        assert.strictEqual(result, 5);
    });
    it('should return 5 for 1.2, 3.7 inputs', function(){
        let result = calculateNumber(1.2, 3.7);
        assert.strictEqual(result, 5);
    });
    it('should return 6 for 1.5, 3.7 inputs', function(){
        let result = calculateNumber(1.5, 3.7);
        assert.strictEqual(result, 6);
    });
    it('should return 0 for 0, 0 inputs', function(){
        let result = calculateNumber(0, 0);
        assert.strictEqual(result, 0);
    });
    it('should return -6 for -1.5, -3.7 inputs', function(){
        let result = calculateNumber(-1.5, -3.7);
        assert.strictEqual(result, -6);
    });
    it('should return -5 for -1.2, -3.7 inputs', function(){
        let result = calculateNumber(-1.2, -3.7);
        assert.strictEqual(result, -5);
});
