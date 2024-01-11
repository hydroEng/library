const myLibrary = [];

function Book(title, author, pages, read) {
  // Constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.addBookToLibraryArray = function () {
  myLibrary.push(this);
}

Book.prototype.updateLibrary = function () {
    this.addBookToLibraryArray()

    let libraryElement = document.getElementById("library");
    libraryElement.innerHTML = '';

    for (i=0; i < myLibrary.length; i++) {
        let listItem = document.createElement("li");
        book = myLibrary[i]
        listItem.innerText = String(book.title);
        libraryElement.appendChild(listItem);
    }
}

let myBook = new Book('LOTR', "Tolkien", 69, false)
myBook.updateLibrary()