#include <stdio.h>
#include <math.h>

int main()
{
    int n;
    int hasDivisor = 0; // flag to track divisors

    printf("Enter any number: ");
    scanf("%d", &n);

    // Edge cases
    if (n <= 1)
    {
        printf("%d is neither Prime nor Composite\n", n);
        return 0;
    }

    printf("Divisors (excluding 1 and %d):\n", n);

    // Check divisors up to sqrt(n)
    for (int i = 2; i <= sqrt(n); i++)
    {
        if (n % i == 0)
        {
            printf("%d ", i);

            // Print the pair divisor if different
            if (i != n / i)
            {
                printf("%d ", n / i);
            }

            hasDivisor = 1;
        }
    }

    // If no divisors found
    if (!hasDivisor)
    {
        printf("No divisors found\n");
        printf("%d is a Prime number\n", n);
    }
    else
    {
        printf("\n%d is a Composite number\n", n);
    }

    return 0;
}
