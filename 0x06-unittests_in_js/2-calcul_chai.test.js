const assert = require('assert');
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js')


describe('calculateNumber' , function(){
    describe('SUM', function(){
        it('should return 4 for SUM, 1, 3 inputs', function(){
            let result = calculateNumber('SUM', 1, 3);
            expect(result).to.be(4);
        });
        it('should return 5 for SUM, 1, 3.7 inputs', function(){
            let result = calculateNumber('SUM', 1, 3.7);
            assert.strictEqual(result, 5);
        });
        it('should return 5 for SUM, 1.2, 3.7 inputs', function(){
            let result = calculateNumber('SUM', 1.2, 3.7);
            assert.strictEqual(result, 5);
        });
        it('should return 6 for SUM, 1.5, 3.7 inputs', function(){
            let result = calculateNumber('SUM', 1.5, 3.7);
            assert.strictEqual(result, 6);
        });
        it('should return 0 for SUM, 0, 0 inputs', function(){
            let result = calculateNumber('SUM', 0, 0);
            assert.strictEqual(result, 0);
        });
        it('should return -5 for SUM, -1.5, -3.7 inputs', function(){
            let result = calculateNumber('SUM', -1.5, -3.7);
            assert.strictEqual(result, -5);
        });
        it('should return -5 for SUM, -1.2, -3.7 inputs', function(){
            let result = calculateNumber('SUM', -1.2, -3.7);
            assert.strictEqual(result, -5);
        });
    });
    describe('SUBTRACT', function(){
        it('should return -2 for SUBTRACT, 1, 3 inputs', function(){
            let result = calculateNumber('SUBTRACT', 1, 3);
            assert.strictEqual(result, -2);
        });
        it('should return -3 for SUBTRACT, 1, 3.7 inputs', function(){
            let result = calculateNumber('SUBTRACT', 1, 3.7);
            assert.strictEqual(result, -3);
        });
        it('should return -3 for SUM, 1.2, 3.7 inputs', function(){
            let result = calculateNumber('SUBTRACT', 1.2, 3.7);
            assert.strictEqual(result, -3);
        });
        it('should return -2 for SUBTRACT, 1.5, 3.7 inputs', function(){
            let result = calculateNumber('SUBTRACT', 1.5, 3.7);
            assert.strictEqual(result, -2);
        });
        it('should return 0 for SUBTRACT, 0, 0 inputs', function(){
            let result = calculateNumber('SUBTRACT', 0, 0);
            assert.strictEqual(result, 0);
        });
        it('should return 3 for SUBTRACT, -1.5, -3.7 inputs', function(){
            let result = calculateNumber('SUBTRACT', -1.5, -3.7);
            assert.strictEqual(result, 3);
        });
        it('should return 3 for SUBTRACT, -1.2, -3.7 inputs', function(){
            let result = calculateNumber('SUBTRACT', -1.2, -3.7);
            assert.strictEqual(result, 3);
        });
    });
    describe('DIVIDE', function(){
        it('should return 2 for DIVIDE, 6, 3 inputs', function(){
            let result = calculateNumber('DIVIDE', 6, 3);
            assert.strictEqual(result, 2);
        });
        it('should return 3 for DIVIDE, 6, 1.7 inputs', function(){
            let result = calculateNumber('DIVIDE', 6, 1.7);
            assert.strictEqual(result, 3);
        });
        it('should return 3 for DIVIDE, 6.2, 1.7 inputs', function(){
            let result = calculateNumber('DIVIDE', 6.2, 1.7);
            assert.strictEqual(result, 3);
        });
        it('should return 2 for DIVIDE, 5.5, 2.7 inputs', function(){
            let result = calculateNumber('DIVIDE', 5.5, 2.7);
            assert.strictEqual(result, 2);
        });
        it('should return "Error" for DIVIDE, 3, 0 inputs', function(){
            let result = calculateNumber('DIVIDE', 3, 0);
            assert.strictEqual(result, "Error");
        });
        it('should return 2 for DIVIDE, -6.5, -3.2 inputs', function(){
            let result = calculateNumber('DIVIDE', -6.5, -3.2);
            assert.strictEqual(result, 2);
        });
        it('should return 2 for DIVIDE, -6.2, -2.7 inputs', function(){
            let result = calculateNumber('DIVIDE', -6.2, -2.7);
            assert.strictEqual(result, 2);
        });
    });
});
