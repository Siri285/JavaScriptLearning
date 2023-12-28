var clone = function (donor) {
    var Proxy = function () { };
    Proxy.prototype = donor;
    return new Proxy();

};

var banana = {
    heavyCream: [1, "cup", "Organic Valley"],
    halfHalf: [1, "cup", "Organic Valley"],
    sugar: [9 / 16, "cup"],
    yolks: [3],
    banana: [1 + 1 / 2, "cup, puréed"],
    coconutMilk: [1 / 4, "cup"],
    lemon: [2, "tsp", "freshly juiced Meyer lemon"],
    vanilla: [1, "bean", "Madagascar Bourbon"]
};
var chunkyMonkey = clone(banana);
chunkyMonkey.walnuts = [3 / 4, "cup, coarsely chopped"];
chunkyMonkey.bittersweet = [1, "cup, coarsely chopped", "Callebaut"];
console.log(chunkyMonkey);  