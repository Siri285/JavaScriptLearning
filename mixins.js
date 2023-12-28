var cloneMembers = function (donor, donee) {
    donee = donee || {};
    for (var m in donor) {
        if (typeof donor[m] === "object" && donor[m] !== null) {
            donee[m] = typeof donor[m].pop === "function" ? [] : {};
            cloneMembers(donor[m], donee[m]);
        } else {
            donee[m] = donor[m];
        }
    }
    return donee;
};
var merge = function (mixins, donee) {
    var i, j, donee = donee || {};
    for (i = 0, j = mixins.length; i < j; i++) {
        cloneMembers(mixins[i], donee);
    }
    return donee;
};
var french = {
    heavyCream: [1, "cup", "Organic Valley"],
    halfHalf: [2, "cup", "Organic Valley"],
    sugar: [5 / 8, "cup"],
    yolks: [6]
};
var philly = {
    heavyCream: [2, "cup", "Organic Valley"],
    halfHalf: [1, "cup", "Organic Valley"],
    sugar: [5 / 8, "cup"]
};
var gelato = {
    halfHalf: [3, "cup", "Organic Valley"],
    sugar: [5 / 8, "cup"],
    yolks: [6]
};
var vanilla = {
    vanilla: [1, "bean", "Madagascar Bourbon"]
};
var heathBar = {
    heathBars: [4, "bars, coarsely chopped"]
};
var coffee = {
    coffee: [1 / 4, "cup, coarsely ground", "Starbucks Espresso"]
};

var coffeeHeathBarCrunch = merge([gelato, vanilla, coffee, heathBar]);
console.log(coffeeHeathBarCrunch);
var coffee = merge([philly, vanilla, coffee]);
console.log(coffee);
var vanillaHeathBarCrunch = merge([french, vanilla, heathBar]);
console.log(vanillaHeathBarCrunch);