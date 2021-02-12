
const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
    it("Encode: spaces should be maintained in the return", () => {
        const expected = "42 1123";
        const actual = polybius("I am", true);
        expect(actual).to.equal(expected);
    });
    it("Decode: spaces should be maintained in the return", () => {
        const expected = "i/j am";
        const actual = polybius("42 1123", false);
        expect(actual).to.equal(expected);
    });
    it("should return a string", () => {
        const actual = polybius("I am", true);
        expect(actual).to.be.a('string');
    });
    it("encode input are capitalized letters, should still output encoded numbers", () => {
        const expected = "1123";
        const actual = polybius("AM", true);
        expect(actual).to.equal(expected);
    });
    it("encode input are numbers, should output capital letters", () => {
        const expected = "am";
        const actual = polybius("1123", false);
        expect(actual).to.equal(expected);
    });
    it("letters I and J share a space and both return a 42", () => {
        const expected = "4242";
        const actual = polybius("ij", true);
        expect(actual).to.equal(expected);
    });
    it("when decoding 42, should return I/J", () => {
        const expected = "i/ji/j";
        const actual = polybius("4242", false);
        expect(actual).to.equal(expected);
    });
    it("when decoding numbers, should return capital letters", () => {
        const expected = "abc";
        const actual = polybius("112131", false);
        expect(actual).to.equal(expected);
    });
    it("should return false if shift is empty", () => {
        const actual = polybius("421123421", false);
        expect(actual).to.be.false;
    });    
});

