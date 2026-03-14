// Calculate sum ,substract,multiplication,division

#include <stdio.h>

int main()
{
    // Calculate sum ,substract,multiplication,division
    // not using more than 2 variables.
    float x = 0;
    float y = 0;
    printf("Enter 2 numbers:");
    scanf("%f%f", &x, &y);
    printf("%f+%f=%f", x, y, (x + y));
    printf("\n");
    printf("%f-%f=%f", x, y, (x - y));
    printf("\n");
    printf("%f*%f=%f", x, y, (x * y));
    printf("\n");
    printf("%f/%f=%f", x, y, (x / y));
    printf("\n");
    // printf("%d remainder %d=%d",x,y,(x%y));

    return 0;
}