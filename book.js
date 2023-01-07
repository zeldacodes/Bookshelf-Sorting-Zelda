// class Book {
//   constructor(author, language, subject, title) {
//     this.author = author;
//     this.language = language;
//     this.subject = subject;
//     this.title = title;
//   }
//   getDetails() {
//     return `${this.title}, ${this.author}, ${this.language}, ${this.subject}`;
//   }
//}
  
  const bookList = booksArray;
  const favoritedBooks = [];

  const searchInput = document.querySelector('.searchInput');
  const searchButton = document.querySelector('.searchButton');
  const sortButton = document.querySelector('.sortButton');

  searchButton.addEventListener('click', () => renderAllBooks(filterBooks(bookList)))
  sortButton.addEventListener('click', () => renderAllBooks(sortBooks(bookList)))

  console.log(searchButton);

  const filterBooks = (books) => books.filter(book =>
  book.name.toLowerCase().includes(searchInput.value.toLowerCase()));

  const sortBooks = (books) => {
    console.log("Sorted Books")
    return books.sort((a,z) => a.book < b.book ? -1 : 1);
  }

  const favorite = (book) => {
    favoritedBooks.push(book);
    console.log("I am a favorite book!")
    renderAllBooks(bookList);
  }

  const renderBook = (book) => {
    const { author, language, subject, title } = book;
    const bookCard = document.createElement("section");
    bookCard.className = "card";
    const bookDetails = document.createElement("li");
    bookDetails.innerText = `${this.author}, ${this.language}, ${this.subject}, ${this.title}`;
    // more code needed here

    const bookFavorited = document.createElement("p");
    bookFavorited.innerText = `This book ${title} is a favorite!`

    // Add a "favorite" button that indicates whether or not the book instance is a favorite & clicking the button toggles this property
    const favBtn = document.createElement("button");
    favBtn.innerText = "I'm a favorite!";
    favBtn.addEventListener("click", () => favorite(book));

    const updateFavCountButton = document.createElement("button");
    updateFavCountButton.innerText = "Update Favorite Count";
    updateFavCountButton.addEventListener(click, () => updateFavorite(book));

    const elementToAdd = (favoritedBooks.included(book)) ? bookFavorited : button;
    bookCard.append(elementToAdd);

    bookCard.append(title, author, subject, language)
    
    return bookCard;
    }

const renderAllBooks = (books) => {
  const elements = books.map(renderBook);
  bookshelfSection.replaceChildren(...elements);
}

renderAllBooks(bookList);


