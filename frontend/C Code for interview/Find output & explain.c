// Explanation

// Inner printf("Hello") prints Hello

// It returns number of characters printed

// "Hello" → 5 characters

// Outer printf(5) prints 5
#include <stdio.h>
int main()
{
    printf("%d",printf("Hello"));
    return 0;
}
