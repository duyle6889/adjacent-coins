function solution(A) {
    var n = A.length;
    var result = 0;
    if(n == 1) return 0;
    // count number of the same face Coin
    for (let i = 0; i < n - 1; i++) {
        if(A[i] == A[i + 1]) {
            result = result + 1;
        }    
    }
    
    if(result == n - 1) {
        return result - 1;
    }
    
    // for flip one Coin
    var r = 0;
    for(let i = 0; i < n; i++) {
        var count = 0;
        // check curr Coin with prev Coin
        if(i > 0) {
            if(A[i] != A[i - 1])
                count = count + 1;
            else
                count = count - 1; // already count because same face
        }
        // check curr Coin with next Coin
        if(i < n - 1) {
            if(A[i] != A[i + 1])
                count = count + 1;
            else
                count = count - 1; // already count because same face
        }
        r = Math.max(r, coin);
    }
    return result + r;
}
