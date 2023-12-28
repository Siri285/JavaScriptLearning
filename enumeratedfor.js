var shoes = {
    "LunaRacer": 6.6,
    "Air Max": 13,
    "LunarGlide": 10.2,
    "Zoom Streak XC": 7,
    "Free": 8.6,
    "Mayfly": 4,
    "Zoom Vomero": 11.6,
    "LunarElite": 9.7
    };
    var myOptions = [];
    for (var shoe in shoes) {
        if(shoes[shoe] >= 10){
            myOptions.push(shoe);
        }
    }

