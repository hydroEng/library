const myLibrary = [];

// HTML Elements.

// Modals
const showModal = document.getElementById("showModal")
const modal = document.getElementById("modal")
const addBook = document.getElementById("addBook")
const form = document.getElementById("bookForm")

// Form Elements

const bookName = document.getElementById("name")
const bookAuthor = document.getElementById("author")
const bookPages = document.getElementById("pages")
const bookRead = document.getElementById("name")
function Book(title, author, pages, read) {
  // Constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.updateLibrary = function () {
    myLibrary.push(this)

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

showModal.addEventListener("click", () => {
  modal.showModal()
})
