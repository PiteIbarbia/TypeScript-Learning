var Stark = /** @class */ (function () {
    function Stark() {
        this.name = 'Brandon';
        this.saying = Stark.castle;
    }
    Stark.prototype.hello = function (person) {
        console.log('Hello ' + person);
    };
    Stark.castle = 'Winterfell!';
    return Stark;
}());
var ned = new Stark();
ned.saying = 'Winter is coming.';
console.log(Stark.castle);
ned.hello('Robert');
