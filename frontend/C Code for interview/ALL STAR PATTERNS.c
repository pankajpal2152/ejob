// All Star Patterns Program
#include <stdio.h>

int main()
{

    int i, j, k;

    /* ===============================
        1. Increasing Star Pattern
       *
       **
       ***
       ****
       =============================== */
    printf("\nPattern 1:\n");
    for (i = 0; i <= 3; i++)
    {
        for (j = 0; j <= i; j++)
        {
            printf("*");
        }
        printf("\n");
    }

    /* ===============================
        2. Decreasing Star Pattern
       ****
       ***
       **
       *
       =============================== */
    printf("\nPattern 2:\n");
    for (i = 0; i <= 3; i++)
    {
        for (j = 3; j >= i; j--)
        {
            printf("*");
        }
        printf("\n");
    }

    /* ===============================
        3. Right Shift Increasing Stars
        BBBB*
        BBB**
        BB***
        B****
       =============================== */
    printf("\nPattern 3:\n");
    for (i = 0; i <= 3; i++)
    {
        for (k = 3; k >= i; k--)
        {
            printf("B");
        }
        for (j = 0; j <= i; j++)
        {
            printf("*");
        }
        printf("\n");
    }

    /* ===============================
        4. Right Shift Decreasing Stars
        B****
        BB***
        BBB**
        BBBB*
       =============================== */
    printf("\nPattern 4:\n");
    for (i = 0; i <= 3; i++)
    {
        for (k = 0; k <= i; k++)
        {
            printf("B");
        }
        for (j = 3; j >= i; j--)
        {
            printf("*");
        }
        printf("\n");
    }

    /* ===============================
        5. Pascal Triangle (Star Pyramid)
            BBBB*
            BBB***
            BB*****
            B*******
       =============================== */
    printf("\nPascal Triangle:\n");
    for (i = 0; i <= 3; i++)
    {
        for (k = 3; k >= i; k--)
        {
            printf("B");
        }
        for (j = 1; j <= (2 * i + 1); j++)
        {
            printf("*");
        }
        printf("\n");
    }

    /* ===============================
        6. Reverse Pascal Triangle
        B*******
        BB*****
        BBB***
        BBBB*
       =============================== */
    printf("\nReverse Pascal Triangle:\n");
    for (i = 3; i >= 0; i--)
    {
        for (k = 3; k >= i; k--)
        {
            printf("B");
        }
        for (j = 1; j <= (2 * i + 1); j++)
        {
            printf("*");
        }
        printf("\n");
    }

    return 0;
}
