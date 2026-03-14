// Print series

// 0 4 18 48 100
// 🔍 Pattern
// n²(n+1)
// 0²×1 = 0
// 1²×2 = 2 → ×2 again → 4
// 2²×3 = 12 → ×1.5 → 18
// Actually simplified:
// Term = n²(n+1)

#include <stdio.h>
int main(){
    int i ;
    for(i=1;i<6;i++){
        printf("%d ",i*i*(i-1));
    }
    return 0;
}