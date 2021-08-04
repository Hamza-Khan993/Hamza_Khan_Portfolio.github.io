//  async function myFunc(){
//     return "HEllO"
// }

// myFunc().then(res=> console.log(res))

// async function getUsers(url) {
//     const response = await fetch(url);

//     const data = await response.json();

//     return data;
// }

// getUsers('https://jsonplaceholder.typicode.com/users').then(data=>console.log(data))

const posts = {
    "title" :"fdffsdfsfsdfdf",
    "body" : "fsffsfdffsdfefwhd"

}

const http = new EasyHTTP;

// http.get('https://jsonplaceholder.typicode.com/posts').then(data=>console.log(data))

// http.post('https://jsonplaceholder.typicode.com/posts', posts).then(data=>console.log(data))

// http.put('https://jsonplaceholder.typicode.com/posts/2', posts).then(data=>console.log(data))

http.delete('https://jsonplaceholder.typicode.com/posts/2').then(data=>console.log(data))