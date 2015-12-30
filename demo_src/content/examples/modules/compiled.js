var Candy;
(function (Candy) {
    var CandyBar = (function () {
        function CandyBar() {
            console.log('CandyBar constructor');
        }
        return CandyBar;
    })();
    Candy.CandyBar = CandyBar;
})(Candy || (Candy = {}));
console.log('Candy', Candy);
console.log('Candy.CandyBar', Candy.CandyBar);
//# sourceMappingURL=compiled.js.map