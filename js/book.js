class Book {
  constructor(title, author, language, subject){
      this.title = title;
      this.author = author;
      this.language = language;
      this.subject = subject;
      this.isFavorite = false;
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

      // create favorite button
      const favButton = document.createElement("button");
      favButton.innerText = this.isFavorite ? "❤️" : "♡";

      // toggle button when it's clicked on 
      favButton.addEventListener("click", () => {
        this.isFavorite = !this.isFavorite;
        favButton.innerText = this.isFavorite ? "❤️" : "♡";
      });

      li.prepend(favButton);

      // count the total number of favorite books using reduce via an "Update Favorite Count" button
    //   const updateFavCountButton = document.createElement("button");
    //   updateFavCountButton = document.getElementById


      // li.textContent = this.title;
      return li;
      }

}

