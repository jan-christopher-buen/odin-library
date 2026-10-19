# odin-library

A library app for tracking books, built with JavaScript for The Odin Project.

**Live preview:** https://jan-christopher-buen.github.io/odin-library/

## Features

- Shows every book in the library as a card
- Add a new book with a form in a popup dialog
- Mark a book as read or unread
- Remove a book from the library
- Starts with three sample books (books you add are not saved after a page refresh)

## What I practiced

- Creating objects with a constructor function and the `new` keyword
- Adding a shared method to `Book.prototype`
- Giving each book a unique id with `crypto.randomUUID()`
- Keeping the data (the `myLibrary` array) separate from the display (`displayBooks`)
- Linking each card to its book with a `data-id` attribute
- Opening and closing a `<dialog>` and handling form submission with `preventDefault()`
- Laying out the cards with CSS Grid (`repeat(auto-fill, minmax(...))`)

## Built with

- HTML
- CSS (Grid and Flexbox)
- JavaScript
