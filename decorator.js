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

Decorator.prototype.totalLitresOfPaintInStock = function(decorator){
    let totalPaint = 0;
    for (value of decorator.paint_stock.paint.litres){
        totalPaint+=value;
    }
    return totalPaint
}

module.exports = Decorator