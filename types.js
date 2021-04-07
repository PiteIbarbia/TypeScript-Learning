var isWinter = false;
var count = 5;
var name = "Bran";
var names = ['Jon', 'Rick', 'Audry', 5];
var Starks;
(function (Starks) {
    Starks[Starks["Jon"] = 0] = "Jon";
    Starks[Starks["Brad"] = 1] = "Brad";
    Starks[Starks["Eddard"] = 2] = "Eddard";
    Starks[Starks["Catlyn"] = 3] = "Catlyn";
})(Starks || (Starks = {}));
;
var cat = Starks.Catlyn;
function getName() {
    console.log("Winter is coming!");
}
