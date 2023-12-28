var VanillaBean = function (vanilla, cinnamon) {
    this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"];
    cinnamon && (this.cinnamon = [1, "stick", "Saigon"]);

}

VanillaBean.prototype = {
    heavyCream: [1, "cup", "Organic Valley"],
    halfHalf: [2, "cup", "Organic Valley"],
    sugar: [5 / 8, "cup"],
    yolks: [6]
};

var Coffee = function (coffee) {
    this.coffee = coffee || [1 / 4, "cup, coarsly ground", "Starbucks Espresso"];
};
//Inheriting VanillaBean to Coffee prototype
Coffee.prototype = new VanillaBean();

var Chocolate = function (cocoa, bittersweet) {
    this.cocoa = cocoa || [3 / 16, "cup", "Callebaut"];
    this.bittersweet = bittersweet || [1 + 1 / 2, "cup", "Callebaut"];
}

Chocolate.prototype = new VanillaBean();
Chocolate.prototype.yolks = [4];

var chocolate = new Chocolate([1 / 4, "cup", "Bensdorp"]);
/*chocolate has its own cocoa and bittersweet members and inherits other members from
Chocolate.prototype and VanillaBean.prototype.*/
console.log(chocolate);
