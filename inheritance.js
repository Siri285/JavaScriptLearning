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

var coffee = new Coffee();
/* coffee has its own coffee member but inherits other members from Coffee.prototype and
VanillaBean.prototype. */
console.log(coffee);
//create a Chocolate() constructor that also inherits members from VanillaBean().


