// Write your tests here!
const substitution = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
    it("input can include special characters for encoding", () => {
        const expected = "y&ii$r&";
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl", true);
        expect(actual).to.equal(expected);
    });
    it("spaces should be returned when encoding", () => {
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev", true);
        expect(actual).to.equal(expected);
    });
    it("capital letters are ignored when encoding", () => {
        const expected = "jrufscpw";
        const actual = substitution("THINKFUL", "XOyqmcgrukswaflnthdjpzibev", true);
        expect(actual).to.equal(expected);
    });
    it("returns false if alphabet is not exactly 26 characters when encoding", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev#", true);
        expect(actual).to.be.false;
    }); 
    it("returns false if alphabet is not exactly 26 characters when encoding", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzib", true);
        expect(actual).to.be.false;
    });    
    it("returns false if all alphabet characters are not unique characters when encoding", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz", true);
        expect(actual).to.be.false;
    });  
    it("returns false if alphabet is missing when encoding", () => {
        const actual = substitution("thinkful");
        expect(actual).to.be.false;
    });
// ____________________________________________________________________________________________

    it("spaces should be returned when decoding", () => {
        const expected = "you are an excellent spy";
        const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
    });
    it("must decode with given alphabet", () => {
        const expected = "thinkful";
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
    });
    it("should decode with unique characters", () => {
        const expected = "message";
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.equal(expected);
    }); 
    it("capital letters are ignored when decoding", () => {
        const expected = "message";
        const actual = substitution("Y&II$r&", "$wAE&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.equal(expected);
    });
    it("returns false if alphabet is not exactly 26 characters when decoding", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev#", false);
        expect(actual).to.be.false;
    });
    it("returns false if alphabet is not exactly 26 characters when decoding", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzi", false);
        expect(actual).to.be.false;
    });
    it("returns false if all alphabet characters are not unique characters when decoding", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz", false);
        expect(actual).to.be.false;
    });  
    it("returns false if alphabet is missing when decoding", () => {
        const actual = substitution("thinkful", "", false);
        expect(actual).to.be.false;
    });
});
