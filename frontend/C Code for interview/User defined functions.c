// User defined functions.

// Online C compiler to run C program online
#include <stdio.h>

/* User defined functions */
int add(int x, int y)
{
    return x + y;
}

int subtract(int x, int y)
{
    return x - y;
}

int multiply(int x, int y)
{
    return x * y;
}

float divide(int x, int y)
{
    return (float)x / y;
}

int main()
{

    int n1, n2;

    printf("Enter 2 numbers: ");
    scanf("%d %d", &n1, &n2);

    int sum = add(n1, n2);
    int sub = subtract(n1, n2);
    int mult = multiply(n1, n2);

    printf("\nSum = %d", sum);
    printf("\nSubtraction = %d", sub);
    printf("\nMultiplication = %d", mult);

    if (n2 != 0)
    {
        float d = divide(n1, n2);
        printf("\nDivision = %.2f", d);
    }
    else
    {
        printf("\nDivision = Not possible (division by zero)");
    }

    return 0;
}
