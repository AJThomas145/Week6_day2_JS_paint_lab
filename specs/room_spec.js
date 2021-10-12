const assert = require("assert");
const Room = require("../room.js");

describe("Room", function(){
    
    let room;

    beforeEach(function(){
        room = new Room(10)
    });

    it("should have an area", function(){
        const actual = room.area;
        assert.strictEqual(actual, 10);
    });

    it("should show if room is painted", function(){
        const actual = room.painted;
        assert.strictEqual(actual, false);
    });

    it("should be able to update that room has been painted", function(){
        room.hasBeenPainted()
        const actual = room.painted;
        assert.strictEqual(actual, true);
    });
})

