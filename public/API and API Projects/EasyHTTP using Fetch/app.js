const http = new EasyHTTP;

const posts = {
    "name" : "HAmza",
    "username" : "hamza993",
    "email" : "hamzakhan99301@gmail.com"
}

//Get Users
// const users = http.get('https://jsonplaceholder.typicode.com/users');


// users.then(data => console.log(data))
//     .catch(err=>console.log(err))

// http.post('https://jsonplaceholder.typicode.com/users', posts)
//     .then(data => console.log(data))
//     .catch(err=>console.log(err))

// http.put('https://jsonplaceholder.typicode.com/users/5', posts)
//     .then(data => console.log(data))
//     .catch(err=>console.log(err))

http.delete('https://jsonplaceholder.typicode.com/users/5')
    .then(data => console.log("User Deleted Successfully"))
    .catch(err=>console.log(err))