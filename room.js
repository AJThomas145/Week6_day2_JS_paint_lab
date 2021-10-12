const Room = function(area_in_sqm, room_painted=false){
    this.area = area_in_sqm;
    this.painted = room_painted;
};

Room.prototype.hasBeenPainted = function(){
    this.painted = true;
}

module.exports = Room