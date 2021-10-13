const Decorator = function(name){
    this.name = name;
    this.paint_stock = [];
};

Decorator.prototype.addPaintToStock = function(paint){
    this.paint_stock.push(paint);
}

Decorator.prototype.numberOfCansOfPaintInStock = function(){
    return this.paint_stock.length;
}

Decorator.prototype.totalLitresOfPaintInStock = function(){
    let totalPaint = 0;
    for (let paint of this.paint_stock){
        totalPaint+=paint.litres;
    }
    return totalPaint
}

Decorator.prototype.enoughPaintToPaintRoom =function(roomToPaint, litreOfPaint){
    if (litreOfPaint >= roomToPaint.area){
        return true;
    } else {
        return false;
    }
}

Decorator.prototype.paintRoom = function(canPaintRoom){
    if (canPaintRoom === true){
        
    }
}


    

module.exports = Decorator