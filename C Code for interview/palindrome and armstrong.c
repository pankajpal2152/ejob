// Online C compiler to run C program online
#include <stdio.h> //Standard input output.header file.
// Count any number of digits.
// Check a number whether it is Magic number or not.
// 46 = 4+6=10=1+0=1 73 = 7+3=10=1+0=1 is Magic number .
// if sum of sum of 2 digited number is 1 is called Magic number.
int main()
{
    int n = 0;
    printf("Enter any number:");
    scanf("%d", &n);
    int count = 0;
    int rev = 0;
    int arm = 0;
    int x = 0; // store all digits from the number.
    int tmp = n;
    while (n != 0)
    {
        x = n % 10; // digits
        printf("%d\n", x);
        rev = 10 * rev + x;
        arm = arm + x * x * x;
        count++;
        n = n / 10;
    }
    printf("%d is %d digited number", tmp, count);
    printf("\nReverse of %d is %d", tmp, rev);
    if (tmp == rev)
    {
        printf("\n%d =Palindrome", tmp);
    }
    else
    {
        printf("\n%d=Not Palindrome", tmp);
    }
    printf("\nCubic sum of %d is =%d", tmp, arm);
    if (arm == tmp)
    {
        printf("\n%d=ArmStrong number", tmp);
    }
    else
    {
        printf("\n%d=Not ArmStrong number", tmp);
    }
    return 0;
}