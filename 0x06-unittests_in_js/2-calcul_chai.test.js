const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require("./2-calcul_chai");


describe("SUM", function() {
    it("is type a string", function() {
        expect(calculateNumber([2, 4], 9, 2).to.equal("type must be a string"));
    })
    it("check type is not valid", function() {
        expect(calculateNumber("TIMES", 2, 4).to.equal("type must be string: SUM | DIVIDE | SUBSTRACT"));
    })
    it("check type in lowercase", function() {
        expect(calculateNumber("sum", 2, 4).to.equal("type must be string: SUM | DIVIDE | SUBSTRACT"));
    })
    it("returns sum of 2 integers", function() {
        expect(calculateNumber("SUM", 2, 4).to.equal(6));
    })
    it("sum of 1 int and float > 0.5 fraction", function() {
        expect(calculateNumber("SUM", 4, 3.6).to.equal(8));
    })
    it("sum of  int and float < 0.5 fraction", function() {
        expect(calculateNumber("SUM", 1, 4.4).to.equal(5));
    })
    it("sum of  int and float = 0.5 fraction", function() {
        expect(calculateNumber("SUM", 4, 2.5).to.equal(7));
    })
    it("sum of 2 floats >= 0.5 fraction", function() {
        expect(calculateNumber("SUM", 1.7, 4.5).to.equal(7));
    })
    it("sum of 2 floats < 0.5 fraction", function() {
        expect(calculateNumber("SUM", 2.4, 5.1).to.equal(7));
    })
    it("sum of 2 zero", function() {
        expect(calculateNumber("SUM", 0, 0).to.equal(0));
    })
    it("sum of int and zero", function() {
        expect(calculateNumber("SUM", 4, 0).to.equal(4));
    })
    it("sum of floats and zero", function() {
        expect(calculateNumber("SUM", 2.4, 0).to.equal(2));
    })

    it("sum of floats > 0.5 fraction and zero", function() {
        expect(calculateNumber("SUM", 4.9, 0).to.equal(5));
    })
    it("sum of -ve and +ve floats < 0.5 fraction", function() {
        expect(calculateNumber("SUM", -2.4, 5.1).to.equal(3));
    })
    it("sum of -ve and +ve floats >= 0.5 fraction", function() {
        expect(calculateNumber("SUM", -2.9, 6.6).to.equal(4));
    })
    it("sum of -ve floats > 0.5 fractions", function() {
        expect(calculateNumber("SUM", -2.9, -1.6).to.equal(-5));
    })
    it("sum of -ve floats < 0.5 fractions", function() {
        expect(calculateNumber("SUM", -0.2, -7.3).to.equal(-7));
    })
    it("sum of non numbers", function() {
        expect(calculateNumber("SUM", "hello", 4).to.equal("Args must be number"));
    })
});

describe("DIVIDE", function() {
    it("division of 2 integers", function() {
        expect(calculateNumber("DIVIDE", 6, 2).to.equal(3));
    })
    it("division to give fraction", function() {
        expect(calculateNumber("DIVIDE", 5, 2).to.equal(2.5));
    })
    it("division to give 0", function() {
        expect(calculateNumber("DIVIDE", 1, 2).to.equal(0.5));
    })
    it("division zero by int", function() {
        expect(calculateNumber("DIVIDE", 0, 2).to.equal(0));
    })
    it("division zero by int", function() {
        expect(calculateNumber("DIVIDE", 5.7, 0).to.equal("Error"));
    })
    it("sub with non number", function() {
        expect(calculateNumber("DIVIDE", "5", 2).to.equal("Args must be number"));
    })
})

describe.only("SUBSTRACT", function() {
    it.only("sub int from int", function() {
        expect(calculateNumber("SUBSTRACT", 6, 2).to.be(4));
    })
    it("sub float from int", function() {
        expect(calculateNumber("SUBSTRACT", 5, 2.1).to.equal(3));
    })
    it("sub float from int", function() {
        expect(calculateNumber("SUBSTRACT", 1.4, 4.5).to.equal(-4));
    })
    it("substract to give -ve number", function() {
        expect(calculateNumber("SUBSTRACT", 1, 3).to.equal(-2));
    })
    it("substract int from float", function() {
        expect(calculateNumber("SUBSTRACT", 2.3, 2).to.equal(0));
    })
    it("substract zero from postitive", function() {
        expect(calculateNumber("SUBSTRACT", 5, 0).to.equal(5));
    })
    it("substract from zero", function() {
        expect(calculateNumber("SUBSTRACT", 0, 8).to.equal(-8));
    })
    it("substract from zero", function() {
        expect(calculateNumber("SUBSTRACT", 0, "a").to.equal("Args must be number"));
    })
})