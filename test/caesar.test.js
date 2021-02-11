// Write your tests here!
const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
    it("should return false if shift is zero", () => {
        const actual = caesar("Courtney", 0, true);
        expect(actual).to.be.false;
    });
    it("should return false if shift is < -25", () => {
        const actual = caesar("Courtney", -43, true);
        expect(actual).to.be.false;
    });
    it("should return false if shift is > 25", () => {
        const actual = caesar("Courtney", 43, true);
        expect(actual).to.be.false;
    });
    it("should return false if shift is empty", () => {
        const actual = caesar("Courtney");
        expect(actual).to.be.false;
    });
    it("spaces should be maintained in the return", () => {
        const expected = "h zl bntqsmdx";
        const actual = caesar("I am Courtney", -1, true);
        expect(actual).to.equal(expected);
    });
    it("non-alphabetic symbols should be ignored and returned as inputed", () => {
        const expected = "h zl sgd $#@!";
        const actual = caesar("I am the $#@!", -1, true);
        expect(actual).to.equal(expected);
    });
    it("should wrap around the alphabet", () => {
        const expected = "cat";
        const actual = caesar("bzs", -1, false);
        expect(actual).to.equal(expected);
    });
    it("should return a string", () => {
        const actual = caesar("bzs", -1, true);
        expect(actual).to.be.a('string');
    });
    it("should ignore all capital letters", () => {
        const expected = "courtney";
        const actual = caesar("DPVSUOFZ", 1, false);
        expect(actual).to.equal(expected);
    });
});

