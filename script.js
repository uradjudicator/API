// sync and async
// JSON = JavaScript Object Notation

const API = 'https://jsonplaceholder.typicode.com/users'
const pre = document.querySelector('pre')

fetch(API)
.then(res => res.json())
.then(users =>{
pre.innerText = JSON.stringify(users, null, 2)
})
