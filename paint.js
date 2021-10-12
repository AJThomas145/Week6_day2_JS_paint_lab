const Paint = function(number_of_litres, can_empty=false){
    this.litres = number_of_litres
    this.empty = can_empty
};

Paint.prototype.emptyPaintCan = function(){
    this.litres = 0
}

Paint.prototype.updateCanEmpty = function(){
    if (this.litres === 0) {
        this.empty = true;
    }
}


module.exports = Paint