// All Pattern & Series Programs
#include <stdio.h>
#include <math.h>

/* ---------- Helper Functions ---------- */

// Check Prime
int isPrime(int n)
{
    if (n <= 1)
        return 0;
    for (int i = 2; i <= sqrt(n); i++)
    {
        if (n % i == 0)
            return 0;
    }
    return 1;
}

// Check Palindrome
int isPalindrome(int n)
{
    int rev = 0, temp = n;
    while (n != 0)
    {
        rev = rev * 10 + (n % 10);
        n /= 10;
    }
    return (rev == temp);
}

/* ---------- MAIN PROGRAM ---------- */
int main()
{

    int i, j;

    /* ===============================
        a) Number Pattern
        1
        1 2
        1 2 3
        1 2 3 4
       =============================== */
    printf("\nPattern a:\n");
    for (i = 1; i <= 4; i++)
    {
        for (j = 1; j <= i; j++)
        {
            printf("%d ", j);
        }
        printf("\n");
    }

    /* ===============================
        b) Alphabet Pattern
        a
        a b
        a b c
        a b c d
       =============================== */
    printf("\nPattern b:\n");
    for (i = 1; i <= 4; i++)
    {
        for (j = 0; j < i; j++)
        {
            printf("%c ", 'a' + j);
        }
        printf("\n");
    }

    /* ===============================
        c) Odd Number Pyramid
            1
          1 2 3
        1 2 3 4 5
      1 2 3 4 5 6 7
       =============================== */
    printf("\nPattern c:\n");
    for (i = 1; i <= 4; i++)
    {
        for (j = 1; j <= (2 * i - 1); j++)
        {
            printf("%d ", j);
        }
        printf("\n");
    }

    /* ===============================
        4) Fibonacci Series
        0 1 1 2 3 5 8 13
       =============================== */
    printf("\nFibonacci Series:\n");
    int a = 0, b = 1, c;
    printf("%d %d ", a, b);
    for (i = 1; i <= 6; i++)
    {
        c = a + b;
        printf("%d ", c);
        a = b;
        b = c;
    }

    /* ===============================
        5) Series: 0 4 18 48 100
        Formula: i*i*(i-1)
       =============================== */
    printf("\n\nSeries 0 4 18 48 100:\n");
    for (i = 1; i <= 5; i++)
    {
        printf("%d ", i * i * (i - 1));
    }

    /* ===============================
        6) PalPrime Check
       =============================== */
    printf("\n\nPalPrime Check:\n");
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);

    if (isPrime(num))
        printf("%d is Prime\n", num);
    else
        printf("%d is NOT Prime\n", num);

    if (isPalindrome(num))
        printf("%d is Palindrome\n", num);
    else
        printf("%d is NOT Palindrome\n", num);

    if (isPrime(num) && isPalindrome(num))
        printf("%d is a PalPrime Number\n", num);
    else
        printf("%d is NOT a PalPrime Number\n", num);

    return 0;
}
