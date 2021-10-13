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

    it("should be able to calculate if there is enough paint to paint room", function(){
        room = new Room(10)
        paint1 = new Paint(10)
        paint2 = new Paint(5)
        decorator.addPaintToStock(paint1)
        decorator.addPaintToStock(paint2)
        const totalPaint = decorator.totalLitresOfPaintInStock()
        const actual = decorator.enoughPaintToPaintRoom(room, totalPaint);
        assert.strictEqual(actual, true)
    });

    it("should be able to paint room if there is enough paint in stock", function(){
        room = new Room(10)
        paint1 = new Paint(10)
        paint2 = new Paint(5)
        decorator.addPaintToStock(paint1)
        decorator.addPaintToStock(paint2)
        const totalPaint = decorator.totalLitresOfPaintInStock()
        const canPaintRoom = decorator.enoughPaintToPaintRoom(room, totalPaint)
        const actual = decorator.paintRoom(canPaintRoom);
        assert.strictEqual(actual, true)

    });
})