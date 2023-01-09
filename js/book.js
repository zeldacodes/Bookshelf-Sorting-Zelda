class Book {
  constructor(title, author, language, subject){
      this.title = title;
      this.author = author;
      this.language = language;
      this.subject = subject;
  }
  getDetails() {
      return `${this.title}, ${this.author}, ${this.language}, ${this.subject}`;
  }

  render() {

      const li = document.createElement("li");
      const title = document.createElement("h1");
      title.textContent = this.title;

      const author = document.createElement("h2");
      author.textContent = this.author;

      const language = document.createElement("h3");
      language.textContent = this.language;

      const subject = document.createElement("h3");
      subject.textContent = this.subject;

      li.append(title, author, language, subject)

      // li.textContent = this.title;
      return li;
      }
}

