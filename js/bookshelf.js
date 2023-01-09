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
  //add an event listener to make the button take action (add/get books)
}
