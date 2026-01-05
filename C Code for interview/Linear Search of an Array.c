// Linear Search of an Array :
// Linear Search of an Array - Optimal Version
#include <stdio.h>

int main()
{
    int n[] = {11, 22, 33, 44, 55};
    int size = sizeof(n) / sizeof(n[0]);

    int x, i;
    int found = 0;

    printf("Enter the value to search: ");
    scanf("%d", &x);

    /* Linear Search */
    for (i = 0; i < size; i++)
    {
        if (n[i] == x)
        {
            found = 1;
            break;
        }
    }

    /* Result */
    if (found)
        printf("%d found at index position %d", x, i);
    else
        printf("%d is not found in the array", x);

    return 0;
}
