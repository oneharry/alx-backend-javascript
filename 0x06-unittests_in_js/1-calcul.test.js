const assert = require("assert");
const calculateNumber = require("./1-calcul");
const { futimes } = require("fs");


describe("SUM", function() {
    it("returns sum of 2 integers", function() {
        assert.equal(calculateNumber("SUM", 2, 4), 6);
    })
    it("sum of 1 int and float > 0.5 fraction", function() {
        assert.equal(calculateNumber("SUM", 4, 3.6), 8);
    })
    it("sum of  int and float < 0.5 fraction", function() {
        assert.equal(calculateNumber("SUM", 1, 4.4), 5);
    })
    it("sum of  int and float = 0.5 fraction", function() {
        assert.equal(calculateNumber("SUM", 4, 2.5), 7);
    })
    it("sum of 2 floats >= 0.5 fraction", function() {
        assert.equal(calculateNumber("SUM", 1.7, 4.5), 7);
    })
    it("sum of 2 floats < 0.5 fraction", function() {
        assert.equal(calculateNumber("SUM", 2.4, 5.1), 7);
    })
    it("sum of 2 zero", function() {
        assert.equal(calculateNumber("SUM", 0, 0), 0);
    })
    it("sum of int and zero", function() {
        assert.equal(calculateNumber("SUM", 4, 0), 4);
    })
    it("sum of floats and zero", function() {
        assert.equal(calculateNumber("SUM", 2.4, 0), 2);
    })

    it("sum of floats > 0.5 fraction and zero", function() {
        assert.equal(calculateNumber("SUM", 4.9, 0), 5);
    })
    it("sum of -ve and +ve floats < 0.5 fraction", function() {
        assert.equal(calculateNumber("SUM", -2.4, 5.1), 3);
    })
    it("sum of -ve and +ve floats >= 0.5 fraction", function() {
        assert.equal(calculateNumber("SUM", -2.9, 6.6), 4);
    })
    it("sum of -ve floats > 0.5 fractions", function() {
        assert.equal(calculateNumber("SUM", -2.9, -1.6), -5);
    })
    it("sum of -ve floats < 0.5 fractions", function() {
        assert.equal(calculateNumber("SUM", -0.2, -7.3), -7);
    })
    it("sum of non numbers", function() {
        assert.equal(calculateNumber("SUM", "hello", 4), "Args must be number");
    })
});

describe("DIVIDE", function() {
    it("division of 2 integers", function() {
        assert.equal(calculateNumber("DIVIDE", 6, 2), 3);
    })
    it("division to give fraction", function() {
        assert.equal(calculateNumber("DIVIDE", 5, 2), 2.5);
    })
    it("division to give 0", function() {
        assert.equal(calculateNumber("DIVIDE", 1, 2), 0.5);
    })
    it("division zero by int", function() {
        assert.equal(calculateNumber("DIVIDE", 0, 2), 0);
    })
    it("division zero by int", function() {
        assert.equal(calculateNumber("DIVIDE", 5.7, 0), "Error");
    })
    it("sub with non number", function() {
        assert.equal(calculateNumber("DIVIDE", "5", 2), "Args must be number");
    })
})

describe("SUBSTRACT", function() {
    it("sub int from int", function() {
        assert.equal(calculateNumber("SUBSTRACT", 6, 2), 4);
    })
    it("sub float from int", function() {
        assert.equal(calculateNumber("SUBSTRACT", 5, 2.1), 3);
    })
    it("substract to give -ve number", function() {
        assert.equal(calculateNumber("SUBSTRACT", 1, 3), -2);
    })
    it("substract int from float", function() {
        assert.equal(calculateNumber("SUBSTRACT", 2.3, 2), 0);
    })
    it("substract zero from postitive", function() {
        assert.equal(calculateNumber("SUBSTRACT", 5, 0), 5);
    })
    it("substract from zero", function() {
        assert.equal(calculateNumber("SUBSTRACT", 0, 8), -8);
    })
    it("substract from zero", function() {
        assert.equal(calculateNumber("SUBSTRACT", 0, "a"), "Args must be number");
    })
})