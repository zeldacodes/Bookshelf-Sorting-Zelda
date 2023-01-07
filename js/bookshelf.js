class Bookshelf {
    constructor(name){
        this.name = name;
        this.books = [];
    }

    // Add books
    addBook(book) {
      this.books.push(book);
    };
  
    /* CHANGE RENDER! THIS IS A TEMPLATE */
    render () {
      const ul = document.createElement("ul");
      for (const book of this.books) {
        ul.append(book.render());
      }
      return ul;
      
    };

    forEach(book){
      `${this.title}, ${this.author}, ${this.language}, ${this.subject}`;

    const bookshelf = new Bookshelf(`${this.title}, ${this.author}, ${this.language}, ${this.subject}`);
  }
}