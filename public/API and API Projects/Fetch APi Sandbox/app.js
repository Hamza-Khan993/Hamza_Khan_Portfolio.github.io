const textButton = document.getElementById("button1")

textButton.addEventListener('click', getText);

function getText(){
    fetch('test.txt')
        .then(res => res.text())
            .then(function(data){
            console.log(data);
            document.getElementById("output").innerHTML = data;
            document.getElementById("output2").innerHTML = ''
            document.getElementById("output3").innerHTML = ""
            })
}

const jsonButton = document.getElementById("button2");
jsonButton.addEventListener('click', getJSON);

function getJSON() {
    fetch('posts.json').then(res => res.json()).then(function(data){
        console.log(data);
        let output = "";
        data.forEach(items => output += `<li>${items.name}</li>`)

        console.log(output)

        document.getElementById("output").innerHTML = output
        document.getElementById("output2").innerHTML = ""
        document.getElementById("output3").innerHTML = ""
        
        // data.forEach(function(items){
        //     output += `<h4>${items}</h4>
        // }
        })
    }

const apiButton = document.getElementById("button3");

apiButton.addEventListener('click', getApi);

function getApi(){
    fetch('https://api.github.com/users').then(function(res){
        return res.json();
        
    }).then(data => {
        console.log(data);
        let output = "";
        let url = "";
        let nodeId = ""
        data.forEach(user => {
            output += `<li>${user.login}</li>`
            url += `<li>${user.url}</li>`
            nodeId += `<li>${user.node_id}</li>`

        })

        console.log(output)

        document.getElementById("output").innerHTML = output
        document.getElementById("output2").innerHTML = url
        document.getElementById("output3").innerHTML = nodeId

        loadHeaders();
        
        // data.forEach(function(items){
        //     output += `<h4>${items}</h4>
        // }
        })
    }
    

    function loadHeaders() {
        document.querySelector(".header").style.display = ''
    }