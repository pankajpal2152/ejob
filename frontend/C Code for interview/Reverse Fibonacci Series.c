// Online C compiler to run C program online
#include <stdio.h> //Standard input output.header file.

int main()
{
    // 13 8 5 3 2 1 1 0
    int r1 = 13;
    int r2 = 8;
    printf("%d\n%d\n", r1, r2);
    int i = 13;
    while (i >= 1)
    {
        i = r1 - r2;
        printf("%d\n", i);
        r1 = r2;
        r2 = i;
    }
    return 0;
}