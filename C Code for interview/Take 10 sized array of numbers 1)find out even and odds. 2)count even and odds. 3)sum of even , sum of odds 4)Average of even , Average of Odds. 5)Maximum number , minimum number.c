// Take 10 sized array of numbers 1)find out even and odds. 2)count even and odds. 3)sum of even , sum of odds 4)Average of even , Average of Odds. 5)Maximum number , minimum number.

#include <stdio.h>

int main()
{
    int a[10];
    int i;

    int evenCount = 0, oddCount = 0;
    int evenSum = 0, oddSum = 0;
    int max, min;

    /* Input */
    printf("Enter 10 numbers:\n");
    for (i = 0; i < 10; i++)
    {
        scanf("%d", &a[i]);
    }

    /* Initialize max & min */
    max = min = a[0];

    /* Single pass for calculation */
    for (i = 0; i < 10; i++)
    {

        /* Max & Min */
        if (a[i] > max)
            max = a[i];
        if (a[i] < min)
            min = a[i];

        /* Even / Odd */
        if (a[i] % 2 == 0)
        {
            evenCount++;
            evenSum += a[i];
        }
        else
        {
            oddCount++;
            oddSum += a[i];
        }
    }

    /* Print Even Numbers */
    printf("\nEven Numbers: ");
    for (i = 0; i < 10; i++)
    {
        if (a[i] % 2 == 0)
            printf("%d ", a[i]);
    }

    /* Print Odd Numbers */
    printf("\nOdd Numbers: ");
    for (i = 0; i < 10; i++)
    {
        if (a[i] % 2 != 0)
            printf("%d ", a[i]);
    }

    /* Results */
    printf("\n\nEven Count = %d", evenCount);
    printf("\nOdd Count = %d", oddCount);

    printf("\nEven Sum = %d", evenSum);
    printf("\nOdd Sum = %d", oddSum);

    if (evenCount > 0)
        printf("\nEven Average = %.2f", (float)evenSum / evenCount);
    else
        printf("\nEven Average = 0");

    if (oddCount > 0)
        printf("\nOdd Average = %.2f", (float)oddSum / oddCount);
    else
        printf("\nOdd Average = 0");

    printf("\nMaximum Number = %d", max);
    printf("\nMinimum Number = %d", min);

    return 0;
}
