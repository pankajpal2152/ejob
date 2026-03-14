// Merge of 2 Arrays - Optimal Solution
#include <stdio.h>

int main()
{
    int a[] = {11, 22, 33};
    int b[] = {100, 200, 300, 400};

    int n1 = sizeof(a) / sizeof(a[0]);
    int n2 = sizeof(b) / sizeof(b[0]);

    int c[n1 + n2];

    int i, j, k = 0;

    /* Copy elements of first array */
    for (i = 0; i < n1; i++)
    {
        c[k++] = a[i];
    }

    /* Copy elements of second array */
    for (j = 0; j < n2; j++)
    {
        c[k++] = b[j];
    }

    /* Display merged array */
    printf("Merged Array:\n");
    for (i = 0; i < n1 + n2; i++)
    {
        printf("%d ", c[i]);
    }

    return 0;
}
