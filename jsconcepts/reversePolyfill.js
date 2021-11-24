function ReversePolyfill(str) {
    const stack = [...str];
    console.log(stack);
    return stack.map((word, index) => {
        return stack[stack.length - 1 - index];
    });
}

console.log(ReversePolyfill('Prem'));