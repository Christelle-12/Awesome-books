function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

let bookCollection = []; // empty array to hold all books added to the collection

// declaration of books to be remove
function removeBookFromCollection(title, author) {
  bookCollection = bookCollection.filter((book) => book.title !== title || book.author !== author);
}

function displayBooks() {
  const booksContainer = document.getElementById('books-container');
  booksContainer.innerHTML = ''; // clear any other book inside by stteing innerHTML to an empty string

  // loops through each book object in bookCollection array,for each book creates a new div

  for (let i = 0; i < bookCollection.length; i += 1) {
    const book = bookCollection[i];
    const bookElement = document.createElement('div');
    bookElement.innerHTML = `<p>Title: ${book.title}</p><p>Author: ${book.author}</p>`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      removeBookFromCollection(book.title, book.author);
      displayBooks();
    });
    bookElement.appendChild(removeButton);
    booksContainer.appendChild(bookElement);
  }
}

// function responsible for books addition
function addBookToCollection(title, author) {
  const newBook = new Book(title, author);
  bookCollection.push(newBook);
  displayBooks(); // re-display the books after adding a new one
}

// Add an event listener to the Add button
const addButton = document.getElementById('add-button');
addButton.addEventListener('click', (event) => {
  event.preventDefault(); // it will  prevent the form from submitting
  const titleInput = document.getElementById('title-input');
  const authorInput = document.getElementById('author-input');
  addBookToCollection(titleInput.value, authorInput.value);
  titleInput.value = ''; // clear the title input
  authorInput.value = ''; // clear the author input
});
