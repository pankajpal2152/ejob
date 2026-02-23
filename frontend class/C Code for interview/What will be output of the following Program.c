// What will be output of the following Program ?
//    int i=1;
//    for(;i<=10;i++);
//    printf("%d",i);

#include <stdio.h>
int main()
{
    int i = 1;
    for (; i <= 10; i++);
    printf("%d", i);
    return 0;
}