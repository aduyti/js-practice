function compare(a, b) {
    if (a.toString() == b) {
        return true;
    } else {
        return false;
    }
}

function additionToN(n) {
    if (n == 0) {
        return 0;
    }
    return n + additionN(--n);
}

function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(--n);
}

function fibonacciRed(n) {
    if (n == 1) {
        return 0;
    }
    if (n == 2) {
        return 1;
    }
    return fibonacciRed(n - 1) + fibonacciRed(n - 2);
}

function fibonacci(n) {
    for (let i = 1; i <= n; i++) {
        console.log(fibonacciRed(i));
    }
}
fibonacci(9);