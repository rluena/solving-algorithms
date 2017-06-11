const mocha = require('mocha');
const expect = require('chai').expect;
// const should = require('chai').should;
const reverseString = require('../app/basic').reverseString;
const factorize = require('../app/basic').factorize;

describe('Basic Algorithms', () => {
   
    describe('#reverseString', () => {
        it('should return a string', () => {
            expect(reverseString('Hello!')).to.be.a('string');
        });

        it('should return a !olleH', () => {
            expect(reverseString('Hello!')).to.be.equal('!olleH');
        });
    });

   
    describe('#factorize', () => {
        it('should be a number', () => {
            expect(factorize(5)).to.be.a('number');
            expect(factorize('some string')).to.be.equal(false);
        });

        it('should return 1, 120, 3628800 and 2432902008176640000', () => {
            expect(factorize(0)).to.be.equal(1);
            expect(factorize(5)).to.be.equal(120);
            expect(factorize(10)).to.be.equal(3628800);
            expect(factorize(20)).to.be.equal(2432902008176640000);
        });
    });
});