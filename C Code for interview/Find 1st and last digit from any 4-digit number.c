// Find 1st and last digit from any 4-digit number
// ✅ Logic
// Last digit → % 10
// First digit → / 1000

#include<stdio.h>
int main(){
    int n=4567;
    int last=n%10;
    int first=n/1000;
    printf("First digit: %d\n",first);
    printf("Last digit: %d\n",last);
    return 0;
}