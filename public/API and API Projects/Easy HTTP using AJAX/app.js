const http = new easyHTTP;


// GET POST 

// http.get('https://jsonplaceholder.typicode.com/posts', function(err ,posts){
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(posts)
//     }
// }
    
// })


// POST DATA 
// data = {
//     "body" : "dffffffffffffffffffffffffff",
//     "title" : "hamza"
// }

// http.post('https://jsonplaceholder.typicode.com/posts', data,  function(err ,posts){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// })

// PUT DATA 

// data = {
//     "body" : "it something differet",
//     "title" : "gagggsgsd"
// }

// http.put('https://jsonplaceholder.typicode.com/posts/50', data,  function(err ,posts){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// })

// data = {
//     "body" : "it something differet",
//     "title" : "gagggsgsd"
// }

http.delete('https://jsonplaceholder.typicode.com/posts', '/10' ,function(err ,posts){
    if (err) {
        console.log(err);
    } else {
        console.log(posts);
    }
})