// const app = document.querySelector('#app');

// const bookshelf = new Bookshelf();

// const title = document.querySelector('books');
// const author = document.querySelector('books');
// const language = document.querySelector('books');
// const subject = document.querySelector('books');

// const book = new Book(title, author, language, subject);

// // Load in book data/details
// for (const bookInfo of bookData) {
//   const book = new Book(
//     bookInfo.author,
//     bookInfo.language,
//     bookInfo.subject,
//     bookInfo.title
//   );
//   bookshelf.addBook(book);
// }

// app.append(bookshelf.render());

// const button = document.querySelector('#btn')

const app = document.querySelector('#app')
// Add the books to the bookshelf by clicking on the button
// button.addEventListener("click", function () {

    const bookshelf = new Bookshelf();

    for (const bookInfo of bookData) {
        const book = new Book(
          bookInfo.title,
          bookInfo.author,
          bookInfo.language,
          bookInfo.subject,
        );
        bookshelf.addBook(book);
    }

    document.querySelector('.bookshelf').append(bookshelf.render())
  


const title = document.querySelector('books');
const author = document.querySelector('books');
const language = document.querySelector('books');
const subject = document.querySelector('books');

const book = new Book(title, author, language, subject);
