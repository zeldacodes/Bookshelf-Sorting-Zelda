class Bookshelf {
  constructor(name){
      this.name = name;
      this.books = [];
  }

  // put the book on the bookshelf
  addBook(book) {
      this.books.push(book)
  }

  render() {
      const ul = document.createElement("ul");
      for (const book of this.books) {
        ul.append(book.render());
      }
      return ul;
      //Render is where I want a loop to RENDER all books in the bookshelf array
  }
  
  forEach(book){
      `${this.title}, ${this.author}, ${this.language}, ${this.subject}`;

  const bookshelf = new Bookshelf(`${this.title}, ${this.author}, ${this.language}, ${this.subject}`);

  const renderAllBooks = (books) => {
    const elements = books.map(renderBook);
    Bookshelf.replaceChildren(...elements);
    }
  }
// }

renderUserInput = () => {
  const searchInput = document.querySelector('.searchInput');
  const searchButton = document.querySelector('.searchButton');
  const sortButton = document.querySelector('.sortButton');

  searchButton.addEventListener("click", () => renderAllBooks(filterBooks(Bookshelf)))

  sortButton.addEventListener("click", () => renderAllBooks(sortBooks(Bookshelf)))

  const sortBooks = (books) => {
    return books.sort((a,z) => a.name < z.name ? -1 : 1); 
  }

  const filterBooks = (books) => books.filter(book => 
    book.name.toLowerCase().includes(searchInput.value.toLowerCase()))
  }

}
renderAllBooks(Bookshelf);
