// ================= 1. PALPRIME NUMBER =================
var PalPrime = /** @class */ (function () {
    function PalPrime() {
    }
    PalPrime.prototype.isPrime = function (num) {
        if (num < 2)
            return false;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0)
                return false;
        }
        return true;
    };
    PalPrime.prototype.isPalindrome = function (num) {
        var str = num.toString();
        return str === str.split("").reverse().join("");
    };
    PalPrime.prototype.check = function (num) {
        return this.isPrime(num) && this.isPalindrome(num)
            ? "PalPrime Number"
            : "Not PalPrime";
    };
    return PalPrime;
}());
var pp = new PalPrime();
console.log("131:", pp.check(131));
// ================= 2. STRING PALINDROME =================
var StringPalindrome = /** @class */ (function () {
    function StringPalindrome() {
    }
    StringPalindrome.prototype.check = function (str) {
        var rev = str.split("").reverse().join("");
        return str === rev ? "Palindrome" : "Not Palindrome";
    };
    return StringPalindrome;
}());
var sp = new StringPalindrome();
console.log("madam:", sp.check("madam"));
// ================= 3. MAGIC NUMBER =================
var MagicNumber = /** @class */ (function () {
    function MagicNumber() {
    }
    MagicNumber.prototype.getDigitSum = function (num) {
        var sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    };
    MagicNumber.prototype.isMagic = function (num) {
        while (num > 9) {
            num = this.getDigitSum(num);
        }
        return num === 1 ? "Magic Number" : "Not Magic";
    };
    return MagicNumber;
}());
var mn = new MagicNumber();
console.log("19:", mn.isMagic(19));
// ================= 4. DIGIT COUNT & MAX DIGIT =================
var DigitAnalyzer = /** @class */ (function () {
    function DigitAnalyzer() {
    }
    DigitAnalyzer.prototype.analyze = function (num) {
        var count = 0;
        var maxDigit = 0;
        while (num > 0) {
            var digit = num % 10;
            if (digit > maxDigit) {
                maxDigit = digit;
            }
            count++;
            num = Math.floor(num / 10);
        }
        return {
            totalDigits: count,
            highestDigit: maxDigit
        };
    };
    return DigitAnalyzer;
}());
var da = new DigitAnalyzer();
console.log("45982:", da.analyze(45982));
// ================= 5. AREA CLASS =================
var Area = /** @class */ (function () {
    function Area() {
    }
    Area.prototype.rectangle = function (length, width) {
        return length * width;
    };
    Area.prototype.circle = function (radius) {
        return Math.PI * radius * radius;
    };
    return Area;
}());
var area = new Area();
console.log("Rectangle Area:", area.rectangle(10, 5));
console.log("Circle Area:", area.circle(7));
