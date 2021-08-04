const button = document.getElementById("button")



button.addEventListener('click', getJokes)

function getJokes(e) {
    const xhr = new XMLHttpRequest();
    const number = document.getElementById("numbers").value



    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true );

    xhr.onload = function() {
        if (this.status === 200) {
            // 
            const response = JSON.parse(this.responseText);
            console.log(response)

            let output = '';

            if (response.type ==="success") {
                response.value.forEach(function(joke){
                    output += `<li class="mt-2">${joke.joke}</li>`;
                })
            } else {
                output += "<h1>Something Went Wrong</h1>"
            }

            document.getElementById("output").innerHTML= output
        }

    }
    xhr.send()

    e.preventDefault();
}