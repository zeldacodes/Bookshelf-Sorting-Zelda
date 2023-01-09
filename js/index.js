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

// console.log(bookshelf.books);
// here, we should see something that is almost identical, but, not identical to book data