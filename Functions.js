    var iceCream = [
        "Chocolate Fudge Brownie",
        "Half Baked",
        "New York Super Fudge Chunk",
        "Coffee Heath Bar Crunch",
        "Everything but the...",
        "Mud Pie",
        "Karamel Sutra",
        "Cinnamon Buns",
        "Milk & Cookies",
        "Mission to Marzipan"
        ];

    var rankFlavor = function(flavor){
        for( var i=iceCream.length;i-- ;)
            {
                if(iceCream[i] === flavor){
                    return flavor + " is number " + (i + 1) + ".";
                }
            } 
            return flavor + " is not among my top 10.";   

        };
        
