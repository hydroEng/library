const myLibrary = [];

// HTML Elements.

// Modals
const showModal = document.getElementById("showModal")
const modal = document.getElementById("modal")
const addBook = document.getElementById("addBook")
const form = document.getElementById("bookForm")

// Form Elements

const bookNameField = document.getElementById("name")
const bookAuthorField = document.getElementById("author")
const bookPagesField = document.getElementById("pages")
const bookReadField = document.querySelector(".read:checked")

function Book(title, author, pages, read) {
  // Constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.index = undefined // Will be added once book is displayed on page. 
}

// Utility functions

function removeBookAtIndex(i) {
  myLibrary.splice(i, 1)
}


const removeBookBtn = document.createElement("button")
removeBookBtn.addEventListener("click", removeBookBtn)


Book.prototype.addToLibraryArray = function () {
  this.index = myLibrary.push(this) - 1
}


updateLibrary = function() {

  let libraryElement = document.getElementById("library");
  libraryElement.innerHTML = '';
  
  for (i=0; i < myLibrary.length; i++) {
    var book = myLibrary[i]
    let listItem = document.createElement("li");
    let bookDiv = document.createElement("div")
    
    bookDiv.className = "bkListItem"

    bookString = document.createElement("p")
    bookString.innerText = `${book.title} - by ${book.author}, pages: ${book.pages}. Read: ${book.read}.`;
    
    var removeBtn = document.createElement("button")

    removeBtn.innerText = "Remove"
    removeBtn.addEventListener("click",() => {
      removeBtn.parentElement.remove()
      removeBookAtIndex(book.index - 1)
      updateLibrary()
    })
    
    listItem.appendChild(bookString)
    listItem.appendChild(removeBtn)

    libraryElement.appendChild(listItem);
}

}

let myBook = new Book('LOTR', "Tolkien", 69, false)
myBook.addToLibraryArray()
let myBook2 = new Book('Harry Potter', "Rowling", 120, true)
myBook2.addToLibraryArray()
updateLibrary()

showModal.addEventListener("click", () => {
  modal.showModal()
})

addBook.addEventListener("click", () => {
  var bookName = bookNameField.value
  var bookAuthor = bookAuthorField.value
  var bookPages = bookPagesField.value
  var bookRead = Boolean(document.querySelector(".read:checked").value)

  var addedBook = new Book(bookName, bookAuthor, bookPages, bookRead)
  addedBook.addToLibraryArray()
  updateLibrary()
})