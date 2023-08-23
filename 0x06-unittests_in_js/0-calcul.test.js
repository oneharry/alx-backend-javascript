const assert = require("assert");
const calculateNumber = require("./0-calcul");


describe("calculateNumber", function() {
    it("returns sum of 2 integers", function() {
        assert.equal(calculateNumber(2, 4), 6);
    })
    it("sum of 1 int and float > 0.5 fraction", function() {
        assert.equal(calculateNumber(4, 3.6), 8);
    })
    it("sum of  int and float < 0.5 fraction", function() {
        assert.equal(calculateNumber(1, 4.4), 5);
    })
    it("sum of  int and float = 0.5 fraction", function() {
        assert.equal(calculateNumber(4, 2.5), 7);
    })
    it("sum of 2 floats >= 0.5 fraction", function() {
        assert.equal(calculateNumber(1.7, 4.5), 7);
    })
    it("sum of 2 floats < 0.5 fraction", function() {
        assert.equal(calculateNumber(2.4, 5.1), 7);
    })
    it("sum of 2 zero", function() {
        assert.equal(calculateNumber(0, 0), 0);
    })
    it("sum of int and zero", function() {
        assert.equal(calculateNumber(4, 0), 4);
    })
    it("sum of floats and zero", function() {
        assert.equal(calculateNumber(2.4, 0), 2);
    })

    it("sum of floats > 0.5 fraction and zero", function() {
        assert.equal(calculateNumber(4.9, 0), 5);
    })
    it("sum of -ve and +ve floats < 0.5 fraction", function() {
        assert.equal(calculateNumber(-2.4, 5.1), 3);
    })
    it("sum of -ve and +ve floats >= 0.5 fraction", function() {
        assert.equal(calculateNumber(-2.9, 6.6), 4);
    })
    it("sum of -ve floats > 0.5 fractions", function() {
        assert.equal(calculateNumber(-2.9, -1.6), -5);
    })
    it("sum of -ve floats < 0.5 fractions", function() {
        assert.equal(calculateNumber(-0.2, -7.3), -7);
    })
    it("sum of non numbers", function() {
        assert.equal(calculateNumber("hello", 4), "Args must be number");
    })
})