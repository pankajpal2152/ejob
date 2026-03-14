/*
Consider the following array int numbers[10]={101,13,2,121,12,34,56,67,9,10}; Task1 : Find Out all Prime numbers. Task 2: Find Out all Palindrome Numbers. Task 3: Find Out Maximum and Minimum numbers. Task 4: Find Out Highest Prime and lowest Palindrome number. Task 5:Generate the same array with negative exponential value.
*/
#include <stdio.h>
#include <math.h>

/* Function to check Prime */
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

/* Function to check Palindrome */
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

int main()
{

    int numbers[10] = {101, 13, 2, 121, 12, 34, 56, 67, 9, 10};
    int size = 10;

    int max = numbers[0], min = numbers[0];
    int highestPrime = -1;
    int lowestPalindrome = -1;

    printf("Original Array:\n");
    for (int i = 0; i < size; i++)
        printf("%d ", numbers[i]);

    /* Task 1: Prime Numbers */
    printf("\n\nPrime Numbers:\n");
    for (int i = 0; i < size; i++)
    {
        if (isPrime(numbers[i]))
        {
            printf("%d ", numbers[i]);
            if (numbers[i] > highestPrime)
                highestPrime = numbers[i];
        }
    }

    /* Task 2: Palindrome Numbers */
    printf("\n\nPalindrome Numbers:\n");
    for (int i = 0; i < size; i++)
    {
        if (isPalindrome(numbers[i]))
        {
            printf("%d ", numbers[i]);
            if (lowestPalindrome == -1 || numbers[i] < lowestPalindrome)
                lowestPalindrome = numbers[i];
        }
    }

    /* Task 3: Max & Min */
    for (int i = 1; i < size; i++)
    {
        if (numbers[i] > max)
            max = numbers[i];
        if (numbers[i] < min)
            min = numbers[i];
    }

    printf("\n\nMaximum Number = %d", max);
    printf("\nMinimum Number = %d", min);

    /* Task 4: Highest Prime & Lowest Palindrome */
    printf("\n\nHighest Prime Number = %d", highestPrime);
    printf("\nLowest Palindrome Number = %d", lowestPalindrome);

    /* Task 5: Negative Exponential Array */
    printf("\n\nNegative Exponential Array:\n");
    for (int i = 0; i < size; i++)
    {
        int negExp = -(numbers[i] * numbers[i]);
        printf("%d ", negExp);
    }

    return 0;
}
