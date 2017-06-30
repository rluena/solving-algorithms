const mocha = require('mocha');
const expect = require('chai').expect;
const assert = require('chai').assert;
const diffArray = require('../solutions/intermediate').diffArray;

describe('Intermediate Algorithms', () => {
    describe('#diffArry', () => {
        it('should be an array', () => {
            expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).to.be.an('array');
        });
        
        it('should return ', () => {
            assert.deepEqual(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4]);
        });
        
    });
});