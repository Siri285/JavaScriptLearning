var emulate = function(donor, more){
    var Proxy = function(){}, child, m;
    Proxy.prototype = donor;
    child = new Proxy();
    for (var m in more) {
        child[m] = more[m];
    }
    return child;
};

var chocolate ={
    heavyCream: [1, "cup", "Organic Valley"],
    halfHalf: [2, "cup", "Organic Valley"],
    sugar: [5/8, "cup"],
    yolks: [6],
    cocoa: [3/8, "cup", "Callebaut, Dutch process"],
    vanilla: [1, "bean", "Madagascar Bourbon"]
    };
 var newYorkSuperFudgeChunk = emulate(chocolate,{
    pecans: [1/4, "cup, coarsely chopped"],
    walnuts: [1/4, "cup, coarsely chopped"],
    almonds: [1/4, "cup, coarsely chopped"],
    whiteChocolate: [1/3, "cup, coarsely chopped", "Callebaut"],
    bittersweetChocolate: [1/3, "cup, coarsely chopped", "Callebaut"]
    });
    
    console.log(chocolate);
    console.log(newYorkSuperFudgeChunk);
    