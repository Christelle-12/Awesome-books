// constructor function to create new book object
function Book(title, author, year) {
  this.title = title;
  this.author = author
  this.year = year;
}

 let bookCollection = []; //empty array to hold all books added to the collection

 //function to display all the books in the collection 
function displayBooks() {
  const booksContainer = document.getElementById("books-container");
  booksContainer.innerHTML = ""; //clear any other book inside by stteing innerHTML to an empty string

  //loops through each book object in bookCollection array,for each book creates a new div
  for (let i = 0; i < bookCollection.length; i++) {
    const book = bookCollection[i];
    const bookElement = document.createElement("div");
    bookElement.innerHTML = `<p>Title: ${book.title}</p><p>Author: ${book.author}</p>`;
    // creation of new button after div creation
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function() {
      removeBookFromCollection(book.title, book.author);
      displayBooks(); // re-display the books after removing one
    });
    bookElement.appendChild(removeButton);
    booksContainer.appendChild(bookElement);
  }
}
//function responsible for books addition
function addBookToCollection(title, author) {
  let newBook = new Book(title, author);
  bookCollection.push(newBook);
  displayBooks(); // re-display the books after adding a new one
}
//function for remmoving book object from bookCollection array
function removeBookFromCollection(title, author) {
  bookCollection = bookCollection.filter(book => book.title !== title || book.author !== author);// filter method used to create new array
}

// Add an event listener to the Add button
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", function(event) {
  event.preventDefault(); //it will  prevent the form from submitting
  const titleInput = document.getElementById("title-input");
  const authorInput = document.getElementById("author-input");
  addBookToCollection(titleInput.value, authorInput.value);
  titleInput.value = ""; // clear the title input
  authorInput.value = ""; // clear the author input
});
