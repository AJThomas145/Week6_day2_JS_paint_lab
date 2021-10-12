const assert = require("assert");
const Decorator = require("../decorator.js");
const Paint = require("../paint.js")
const Room = require("../room.js");

describe("Decorator", function(){
    
    let decorator;

    beforeEach(function(){
        decorator = new Decorator("Andy")
    });

    it("should have a name", function(){
        const actual = decorator.name;
        assert.strictEqual(actual, "Andy");
    });

    it("should start with an empty paint stock", function(){
        const actual = decorator.paint_stock;
        assert.deepStrictEqual(actual, []);
    });

    it("should be able to add paint to stock", function(){
        paint = new Paint(10)
        decorator.addPaintToStock(paint)
        const actual = decorator.numberOfCansOfPaintInStock();
        assert.strictEqual(actual, 1)
    });

    it("should be able to calculate total litres of paint in stock", function(){
        paint1 = new Paint(10)
        paint2 = new Paint(5)
        decorator.addPaintToStock(paint1)
        decorator.addPaintToStock(paint2)
        const actual = decorator.totalLitresOfPaintInStock();
        assert.strictEqual(actual, 15)
    });
})