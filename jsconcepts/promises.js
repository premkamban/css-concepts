const fetch = require("node-fetch");
// const rep = new Promise((res, reject) => {
//     reject(console.log('rejected...'));
// });

const f = fetch('https://jsonplaceholder.typicode.com/todos/1')
const d = fetch('https://jsonplaceholder.typicode.com/todos/1')


Promise.all([f, d]).then(res => console.log(res.json())).catch(err => console.log('failed promise', err));