/*
. 1 cup, Organic Valley heavy whipping cream
• 1 cup, Organic Valley half & half
• 5/8 cup, sugar
• 6 egg yolks
• 2 cups, wild Maine blueberries
• 1 Madagascar Bourbon vanilla bean
• 2 tsp. fresh lemon juice
*/

//Object Creation for the above

var wildMaineBlueberry ={
    heavyCream: [1, "cup", "Organic Valley"],
    halfhalf: [1, "cup", "Organic Valley"],
    sugar: [5/8, "cup"],
    yolks: [6],
    blueberries: [2, "cup", "fresh wild Maine blueberries"],
    vanilla: [1, "bean", "Madagascar Bourbon"],
    freshLemonJuice: [2, "tsp"] 
};

var WildMaineBlueberry = function(blueberries, vanilla){
    this.blueberries = [2, "cup", blueberries ? blueberries : "fresh wild Maine blueberries"];
    this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"];
}
WildMaineBlueberry.prototype = {
    heavyCream: [1, "cup", "Organic Valley"],
    halfhalf: [1, "cup", "Organic Valley"],
    sugar: [5/8, "cup"],
    yolks: [6],
    freshLemonJuice: [2, "tsp"] 
};

var wildMaineBlueberry = new WildMaineBlueberry();
console.log(wildMaineBlueberry);

var wildMaineBlueberry = new WildMaineBlueberry("Dole frozen wild blueberries", "Tahitian");
console.log(wildMaineBlueberry);

var wildMaineBlueberry = WildMaineBlueberry();
console.log(wildMaineBlueberry);
console.log(blueberries);
console.log(vanilla);