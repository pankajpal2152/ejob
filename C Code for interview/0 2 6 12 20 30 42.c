// 0 2 6 12 20 30 42
// n(n+1)
// 0×1 = 0
// 1×2 = 2
// 2×3 = 6
// 3×4 = 12.

#include <stdio.h>

int main()
{
    int i;
    for (i = 0; i <= 6; i++)
    {
        printf("%d ", i * (i + 1));
    }
    return 0;
}
