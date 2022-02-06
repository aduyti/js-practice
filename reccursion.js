function compare(a, b) {
    if (a.toString() == b) {
        return true;
    } else {
        return false;
    }
}
// 0 to n addition
function additionToN(n) {
    if (n == 0) {
        return 0;
    }
    return n + additionN(--n);
}
// factorial of n
function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(--n);
}
// n-th fibonacci
function fibonacciNth(n) {
    if (n == 1) {
        return 0;
    }
    if (n == 2) {
        return 1;
    }
    return fibonacciNth(n - 1) + fibonacciNth(n - 2);
}
// fibonacci series reverse
function fibonacciReverse(n) {
    if (n == 0) {
        return 0;
    }
    console.log(fibonacciNth(n));
    fibonacciReverse(n - 1);
}
// fibonacci by looping and recursion
function fibonacciByLoop(n) {
    for (let i = 1; i <= n; i++) {
        console.log(fibonacciNth(i));
    }
}