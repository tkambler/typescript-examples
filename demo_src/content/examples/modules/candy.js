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
//# sourceMappingURL=candy.js.map