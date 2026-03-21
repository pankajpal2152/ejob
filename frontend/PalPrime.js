"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PalPrime = /** @class */ (function () {
    function PalPrime() {
    }
    PalPrime.prototype.checkPrime = function (n) {
        if (n < 2)
            return false;
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    };
    PalPrime.prototype.checkPal = function (n) {
        var rev = 0;
        var temp = n;
        while (n > 0) {
            var digit = n % 10;
            rev = rev * 10 + digit;
            n = Math.floor(n / 10);
        }
        return temp === rev;
    };
    return PalPrime;
}());
exports.default = PalPrime;
