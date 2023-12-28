var VanillaBean = function (vanilla, cinnamon) {
    this.vanilla = [1, "cup", vanilla ? vanilla : "Madagascar Bourbon"];
    cinnamon && (this.cinnamon = [1, "stick", "Saigon"]);

};

VanillaBean.prototype = {
    heavyCream: [1, "cup", "Organic Valley"],
    halfHalf: [2, "cup", "Organic Valley"],
    sugar: [5/8, "cup"],
    yolks: [6]
};

var Coffee = function(coffee) {
    this.coffee = coffee || [1/4, "cup, coarsely ground", "Starbucks Espresso"];
};

Coffee.prototype = new VanillaBean();
var Chocolate = function (cocoa, bittersweet) {
    this.cocoa = cocoa || [3/16, "cup", "Callebaut"];
    this.bittersweet = bittersweet || [1 + 1/2, "cup", "Callebaut"];
};

Chocolate.prototype = new VanillaBean();
Chocolate.prototype.yolks =[4];

var MintChoclateChunk = function(mint) {
    this.mint = mint || [1, "cup", "fresh mint leaves"]

};

MintChoclateChunk.prototype = new Chocolate();
MintChoclateChunk.prototype.vanilla = [1/3, "bean", "Madagascar Bourbon"];
MintChoclateChunk.prototype.bittersweet[0] = 1;
delete MintChoclateChunk.prototype.cocoa;
var mintChoclateChunk = new MintChoclateChunk();

/* mintChocolateChunk has its own mint member and inherits other members from
MintChocolateChunk.prototype, Chocolate.prototype, and VanillaBean.prototype*/

console.log(mintChoclateChunk);

mintChoclateChunk instanceof MintChoclateChunk;
mintChoclateChunk instanceof Chocolate;
mintChoclateChunk instanceof Coffee;
mintChoclateChunk instanceof VanillaBean;
mintChoclateChunk instanceof Object;

 
