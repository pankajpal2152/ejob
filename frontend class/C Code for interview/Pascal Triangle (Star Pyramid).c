/* ⭐ Pattern 5 – Pascal Triangle (Star Pyramid)
    *
   ***
  *****
 *******
 */
#include <stdio.h>

int main()
{
    int n = 4;
    for (int i = 1; i <= n; i++)
    {
        for (int s = n; s > i; s--)
        {
            printf(" ");
        }
        for (int j = 1; j <= (2 * i - 1); j++)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
