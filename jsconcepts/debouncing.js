
let count = 0;
const getData = () => {
    console.log(`typing ${count++}`);
}

const debounce = (fn, d) => {
    let timer;
    return function () {
        let context = this,
            arg = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, arg);
        }, d);
    }
}

const optimistic = debounce(getData, 1000);