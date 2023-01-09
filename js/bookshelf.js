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
  }
}

  const searchInput = document.querySelector('.searchInput');
  const searchButton = document.querySelector('.searchButton');
  const sortButton = document.querySelector('.sortButton');
  
  // searchButton.addEventListener('click', () => renderAllBooks(filterBooks(catList)))

  // sortButton.addEventListener('click', () => renderAllCats(sortCats(catList)))
  
  // const filterCats = (cats) => cats.filter(cat => cat.name.toLowerCase().includes(searchInput.value.toLowerCase()));
