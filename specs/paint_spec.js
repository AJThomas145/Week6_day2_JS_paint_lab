const assert = require("assert");
const Paint = require("../paint.js");

describe("Paint", function(){
    let paint;

    beforeEach(function(){
        paint = new Paint(10)
    });

    it("should show litres of paint", function(){
        const actual = paint.litres;
        assert.strictEqual(actual, 10)
    });

    it("should be able to check if paint can is empty", function(){
        const actual = paint.empty;
        assert.strictEqual(actual, false)
    });

    it("should be able to empty itself of paint", function(){
        const actual = 
    })
});