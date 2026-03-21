class PalPrime {
    checkPrime(n: number): boolean {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
    checkPal(n: number): boolean {
        let rev = 0;
        let temp = n;
        while (n > 0) {
            let digit = n % 10;
            rev = rev * 10 + digit;
            n = Math.floor(n / 10);
        }
        return temp === rev;
    }
}
export default PalPrime;