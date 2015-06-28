/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />
/// <reference path="./two.d.ts" />
/**
 * Module dependencies.
 */
import chai = require('chai');
import two = require('./two');
/**
 * Globals
 */

var expect = chai.expect;
/**
 * Unit tests
 */
 describe('User Model Unit Tests:', () => {

     describe('verify say', () => {
         it('should be <hello>', (done) => {
             var t2 = new two.Two("hello");
             expect(t2.say()).to.equals("hello");
             done();
         });
     });
 });
