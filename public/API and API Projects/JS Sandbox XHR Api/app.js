const buttons = document.getElementById("button")

buttons.addEventListener('click', loadData)

function loadData() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);

    // console.log(xhr.readyState)

    xhr.onload = function() {
        if (this.status === 200) {
            document.getElementById("output").innerHTML = 
            `<h1>${this.responseText}</h1>`
        }
    }

    // xhr.onreadystatechange = function() {
    //     console.log(this.readyState)

    //     if(this.status === 200 && this.readyState===4){
    //         console.log(this.responseText);
    //     }
    // }
    xhr.send();
}