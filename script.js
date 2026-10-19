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

Book.prototype.toggleRead = function () {
    this.read = !this.read;
};

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function removeBook(id) {
    const index = myLibrary.findIndex((book) => book.id === id);
    myLibrary.splice(index, 1);
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

        const toggleButton = document.createElement("button");
        toggleButton.classList.add("toggle-btn");
        toggleButton.textContent = book.read ? "Mark as unread" : "Mark as read";
        toggleButton.addEventListener("click", () => {
            book.toggleRead();
            displayBooks();
        });

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-btn");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            removeBook(card.dataset.id);
            displayBooks();
        });

        const buttons = document.createElement("div");
        buttons.classList.add("card-buttons");
        buttons.appendChild(toggleButton);
        buttons.appendChild(removeButton);

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(status);
        card.appendChild(buttons);
        libraryContainer.appendChild(card);
    });
}

displayBooks();

const dialog = document.querySelector(".book-dialog");
const form = document.querySelector(".book-form");
const newBookButton = document.querySelector(".new-book-btn");
const cancelButton = document.querySelector(".cancel-btn");

newBookButton.addEventListener("click", () => {
    dialog.showModal();
});

cancelButton.addEventListener("click", () => {
    form.reset();
    dialog.close();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = Number(document.querySelector("#pages").value);
    const read = document.querySelector("#read").checked;

    addBookToLibrary(title, author, pages, read);
    displayBooks();

    form.reset();
    dialog.close();
});