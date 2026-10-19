const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("Noli Me Tangere", "Jose Rizal", 438, false);
addBookToLibrary("Atomic Habits", "James Clear", 320, true);

const libraryContainer = document.querySelector(".library");

function displayBooks() {
    libraryContainer.textContent = "";

    myLibrary.forEach((book) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.id = book.id;

        const title = document.createElement("h2");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.textContent = `by ${book.author}`;

        const pages = document.createElement("p");
        pages.textContent = `${book.pages} pages`;

        const status = document.createElement("p");
        status.textContent = book.read ? "Read" : "Not read yet";

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(status);
        libraryContainer.appendChild(card);
    });
}

displayBooks();