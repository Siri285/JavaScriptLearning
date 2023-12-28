var Berry = function() {}
Berry.prototype = {
heavyCream: [1, "cup", "Organic Valley"],
halfHalf: [1, "cup", "Organic Valley"],
sugar: [5/8, "cup"],
yolks: [3],
vanilla: [1, "bean", "Madagascar Bourbon"]
};
var Blueberry = function(blueberry, lemon) {
this.blueberry = [2, "cup", blueberry ? blueberry : "Maine wild blueberries"];
this.freshLemonJuice = [2, "tsp", lemon ? lemon : "Meyer"];
};
Blueberry.prototype = Berry.prototype;
var Strawberry = function(strawberry) {
this.strawberry = [2, "cup", strawberry ? strawberry : "fraises des bois"];
};
Strawberry.prototype = Berry.prototype;
var blueberry = new Blueberry();
var strawberry = new Strawberry();
console.log(blueberry);
console.log(strawberry);