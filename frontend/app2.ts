
// ================= 1. PALPRIME NUMBER =================

class PalPrime {

    isPrime(num: number): boolean {
        if (num < 2) return false;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    isPalindrome(num: number): boolean {
        let str = num.toString();
        return str === str.split("").reverse().join("");
    }

    check(num: number): string {
        return this.isPrime(num) && this.isPalindrome(num)
            ? "PalPrime Number"
            : "Not PalPrime";
    }
}

const pp = new PalPrime();
console.log("131:", pp.check(131));


// ================= 2. STRING PALINDROME =================

class StringPalindrome {

    check(str: string): string {
        let rev = str.split("").reverse().join("");
        return str === rev ? "Palindrome" : "Not Palindrome";
    }
}

const sp = new StringPalindrome();
console.log("madam:", sp.check("madam"));


// ================= 3. MAGIC NUMBER =================

class MagicNumber {

    getDigitSum(num: number): number {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    isMagic(num: number): string {
        while (num > 9) {
            num = this.getDigitSum(num);
        }
        return num === 1 ? "Magic Number" : "Not Magic";
    }
}

const mn = new MagicNumber();
console.log("19:", mn.isMagic(19));


// ================= 4. DIGIT COUNT & MAX DIGIT =================

class DigitAnalyzer {

    analyze(num: number) {
        let count = 0;
        let maxDigit = 0;

        while (num > 0) {
            let digit = num % 10;

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
    }
}

const da = new DigitAnalyzer();
console.log("45982:", da.analyze(45982));


// ================= 5. AREA CLASS =================

class Area {

    rectangle(length: number, width: number): number {
        return length * width;
    }

    circle(radius: number): number {
        return Math.PI * radius * radius;
    }
}

const area = new Area();

console.log("Rectangle Area:", area.rectangle(10, 5));
console.log("Circle Area:", area.circle(7));
