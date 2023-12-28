var pirates = {
    "77": "D.J. Carrasco",
    "53": "Brendan Donnelly",
    "29": "Octavio Dotel",
    "57": "Zach Duke",
    "48": "Javier Lopez",
    "28": "Paul Maholm",
    "34": "Daniel McCutchen",
    "47": "Evan Meek",
    "37": "Charlie Morton",
    "49": "Ross Ohlendorf",
    "62": "Hayden Penn",
    "43": "Jack Taschner",
    "41": "Ryan Doumit",
    "35": "Jason Jaramillo",
    "13": "Ronny Cedeno",
    "6": "Jeff Clement",
    "2": "Bobby Crosby",
    "3": "Akinori Iwamura",
    "15": "Andy LaRoche",
    "19": "Ryan Church",
    "46": "Garrett Jones",
    "22": "Andrew McCutchen",
    "85": "Lastings Milledge",
    "58": "John Raynor",
    "24": "Delwyn Young"
    };
    function namePirate(jersey) {
    return jersey + " is " + (pirates[jersey] ? pirates[jersey] : "not worn by a Pirate") + ".";
    }