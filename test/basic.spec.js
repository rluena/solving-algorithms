const mocha = require('mocha');
const expect = require('chai').expect;
// const should = require('chai').should;
const basic = require('../app/basic');

describe('Basic Algorithms', () => {

    describe('#reverseString', () => {
        it('should return a string', () => {
            expect(basic.reverseString('Hello!')).to.be.a('string');
        });

        it('should return a !olleH', () => {
            expect(basic.reverseString('Hello!')).to.be.equal('!olleH');
        });
    })
})