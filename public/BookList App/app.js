// Book Constructor

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn= isbn;
}

//UI Constructor

function UI(){}

UI.prototype.addBookToList= function(book){
    // console.log(book)
    const list = document.getElementById("book-list");
    //create element
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `
    list.appendChild(row)


}
//clear thr form
UI.prototype.clearTheForm = function() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
}

//error messasge
UI.prototype.showAlert = function(message, className) {
    const list = document.querySelector("#book-form");
    const nameBefore = document.getElementsByTagName("h1")
    const container = document.querySelector(".container")
    const errorDiv = document.createElement("div");
    errorDiv.className = `alert ${className}`;
    errorDiv.appendChild(document.createTextNode(message));

    container.insertBefore(errorDiv, list) 

    setTimeout(function(){
        document.querySelector(".alert").remove()
    }, 2000)
}

//delete Boook
UI.prototype.deleteBooks = function(target) {
    if (target.className === "delete") {
        target.parentElement.parentElement.remove() 
    }
}

// Event Lsiteners
document.getElementById("book-form").addEventListener("submit", function(e){
    // Get Form VAlues
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    // console.log(title, author, isbn)

    //Instantiate book
    const book = new Book(title, author, isbn);

    //Instantiate UI
    const ui = new UI();

    //ADd book to the list
    if (title === "" || author === "" || isbn === ""){
        ui.showAlert("Please Fill All Details", 'error')

    } else {
        ui.addBookToList(book);
        ui.showAlert("Book Added Successfully", 'success');
        ui.clearTheForm();
    }

    // console.log(book)
    e.preventDefault()
})

document.querySelector("#book-list").addEventListener("click", function(e){
    const ui = new UI();

    ui.deleteBooks(e.target);
    ui.showAlert("Book Removed!", "success")
    e.preventDefault();
})