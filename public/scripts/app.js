'use strict';

var add = function add(a, b) {
    return a + b;
};

console.log(add(55, 1));

var user = {
    name: 'Rob',
    cities: ['leeds', 'manchester', 'dublin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

var multipliers = {
    numbers: [3, 6, 8],
    multiplyBy: 4,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (digit) {
            return _this2.multiplyBy * digit;
        });
    }
};

console.log(multipliers.multiply());
