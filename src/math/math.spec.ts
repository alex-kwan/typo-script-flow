/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />
/// <reference path="./math12.d.ts" />
/**
 * Module dependencies.
 */
import chai = require('chai');
import math12 = require('./math12');
/**
 * Globals
 */

var expect = chai.expect;

/**
 * Unit tests
 */
describe('User Model Unit Tests:', () => {

    describe('2 + 4', () => {
        it('should be 6', (done) => {
            expect(math12.Math12.add(2,4)).to.equals(6);
            done();
        });

        it('should not be 7', (done) => {
            expect(2+4).to.not.equals(7);
            done();
        });
    });
});
