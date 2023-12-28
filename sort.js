var topTwenty = {
    "Crosby": 49,
    "Ovechkin": 48,
    "Stamkos": 48,
    "Marleau": 43,
    "Gaborik": 41,
    "Kovalchuk": 40,
    "Heatley": 39,
    "Semin": 39,
    "Parise": 37,
    "Burrows": 35,
    "Kopitar": 34,
    "Ryan": 34,
    "Carter": 33,
    "Nash": 33,
    "Iginla": 32,
    "Penner": 32,
    "Backstrom": 31,
    "Hornqvist": 30,
    "Jokinen": 30,
    "Kane": 30
};
var rocketRichard = ["Ovechkin", "Crosby", "Marleau", "Stamkos"], note = "";

rocketRichard.sort(function (p1, p2) {
    console.log(p1, p2);
    var d = topTwenty[p2] - topTwenty[p1];
    console.log(d);
    if (d !== 0) {
        return d;
    } else {
        return (p1 < p2) ? -1 : 1;
    }
});

console.log(rocketRichard);

for(var i = 0; i < rocketRichard.length; i++ ) {
    note = note + rocketRichard[i] + ": " + topTwenty[rocketRichard[i]] + ", ";
}
note.slice(0, -2);
console.log(note.slice(0, -2)); 

for (var i = rocketRichard.length; i--; ) {
    note = note + rocketRichard[i] + ": " + topTwenty[rocketRichard[i]] + ", ";

}
note.slice(0, -2);
console.log(note.slice(0, -2));

var i = rocketRichard.length;
while (i --) {
    note = note + rocketRichard[i] + ": " + topTwenty[rocketRichard[i]] + ", ";

}
note.slice(0, -2);
console.log(note.slice(0, -2));

var i = rocketRichard.length - 1;
do {
    note = note + rocketRichard[i] + ": " + topTwenty[rocketRichard[i]] + ", ";

} while (i --);
console.log(note.slice(0, -2));


