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
    const litres = 0;
    for (const litre in decorator){
        litres+=decorator.paint_stock.number_of_litres;
    }
    return litres
}

module.exports = Decorator