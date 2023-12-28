var VanillaBean = function (vanilla, cinnamon) {
    this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"];
    cinnamon && (this.cinnamon = [1, "stick", "Saigon"]);
};

VanillaBean.prototype = {
    heavyCream: [1, "cup", "Organic Valley"],
    halfHalf: [2, "cup", "Organic Valley"],
    sugar: [5 / 8, "cup"],
    yolks: [6]
};
var Coffee = function (coffee) {
    this.coffee = coffee || [1 / 4, "cup, coarsely ground", "Starbucks Espresso"];
};
Coffee.prototype = new VanillaBean();
var Chocolate = function (cocoa, bittersweet) {
    this.cocoa = cocoa || [3 / 16, "cup", "Callebaut"];
    this.bittersweet = bittersweet || [1 + 1 / 2, "cup", "Callebaut"];
};
Chocolate.prototype = new VanillaBean();
Chocolate.prototype.yolks = [4];
var MintChocolateChunk = function (mint) {
    this.mint = mint || [1, "cup", "fresh mint leaves"];
};
MintChocolateChunk.prototype = new Chocolate();
MintChocolateChunk.prototype.vanilla = [1 / 3, "bean", "Madagascar Bourbon"];
MintChocolateChunk.prototype.bittersweet[0] = 1;
delete MintChocolateChunk.prototype.cocoa;
var vanilla = new VanillaBean();
var coffee = new Coffee();
var choclate = new Chocolate();
var mintChoclateChunk = new MintChocolateChunk();

VanillaBean.prototype.heathBars =[4, "Heath Bars, chopped in chunck"];
console.log(vanilla);
console.log(coffee);
console.log(choclate);
console.log(mintChoclateChunk);
