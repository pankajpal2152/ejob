/* 1.Check a No Odd or Even
1.Check a No Odd or Even
2.Check a No +VE or -VE
3.Check a number Prime or Composite
4.Check a number Palindrome or not.
    Actual no == reverse number.
    121  reverse 121 -->Palindrome
5.Check a number Armstrong or not.
    Cubic sum of all digits = number
    153 = 1*1*1 + 5*5*5 + 3*3*3
    =   1+125+27=153.
6.Check a Number Magic number or not.
    Sum of sum of digits of a number is 1.
    73 = 7+3=10= 1+0= 1
    46=  4+6=10= 1+0= 1
    19=  1+9=10= 1+0=1
show full code with optimal solution accordingly
*/
#include <stdio.h>
#include <math.h>

int main()
{

    int n, temp, digit;
    int rev = 0;
    int armSum = 0;

    printf("Enter a number: ");
    scanf("%d", &n);

    temp = n;

    /* 1. Odd or Even */
    if (n % 2 == 0)
        printf("\n%d is Even", n);
    else
        printf("\n%d is Odd", n);

    /* 2. Positive or Negative */
    if (n > 0)
        printf("\n%d is Positive", n);
    else if (n < 0)
        printf("\n%d is Negative", n);
    else
        printf("\n%d is Zero", n);

    /* 3. Prime or Composite */
    if (n <= 1)
    {
        printf("\n%d is neither Prime nor Composite", n);
    }
    else
    {
        int isPrime = 1;
        for (int i = 2; i <= sqrt(n); i++)
        {
            if (n % i == 0)
            {
                isPrime = 0;
                break;
            }
        }
        if (isPrime)
            printf("\n%d is Prime", n);
        else
            printf("\n%d is Composite", n);
    }

    /* 4. Palindrome */
    int t1 = n;
    while (t1 != 0)
    {
        rev = rev * 10 + (t1 % 10);
        t1 /= 10;
    }

    if (rev == n)
        printf("\n%d is Palindrome", n);
    else
        printf("\n%d is NOT Palindrome", n);

    /* 5. Armstrong Number (3-digit based) */
    int t2 = n;
    while (t2 != 0)
    {
        digit = t2 % 10;
        armSum += digit * digit * digit;
        t2 /= 10;
    }

    if (armSum == n)
        printf("\n%d is an Armstrong number", n);
    else
        printf("\n%d is NOT an Armstrong number", n);

    /* 6. Magic Number */
    int sum = n;
    while (sum > 9)
    {
        int s = 0;
        while (sum != 0)
        {
            s += sum % 10;
            sum /= 10;
        }
        sum = s;
    }

    if (sum == 1)
        printf("\n%d is a Magic number", n);
    else
        printf("\n%d is NOT a Magic number", n);

    return 0;
}
