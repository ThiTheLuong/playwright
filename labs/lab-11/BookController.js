"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("./Book");
var readline = require('readline-sync');
var BookController = /** @class */ (function () {
    function BookController() {
        this.books = [];
        this.books.push(new Book_1.default("1", "Book 1", "Leo 1", 2020));
        this.books.push(new Book_1.default("2", "Book 2", "Leo 2", 2021));
    }
    BookController.prototype.start = function () {
        var running = true;
        while (running) {
            this.showMenu();
            var option = readline.questionInt("Enter your choice: ");
            switch (option) {
                case 1:
                    this.createBook();
                    break;
                case 2:
                    this.searchBook();
                    break;
                case 3:
                    this.editBook();
                    break;
                case 4:
                    this.removeBook();
                    break;
                case 5:
                    this.displayBooks();
                    break;
                case 0:
                    running = false;
                    console.log("Exiting program.");
                    break;
                default:
                    console.log("Invalid choice!");
            }
        }
    };
    BookController.prototype.showMenu = function () {
        console.log("\n======== BOOK MANAGEMENT ========\n1. Add new book\n2. Find a book by ISBN\n3. Update book details\n4. Remove a book\n5. Show book list\n0. Exit\n");
    };
    BookController.prototype.findBookByISBN = function (isbn) {
        return this.books.find(function (b) { return b.getISBN() === isbn; });
    };
    BookController.prototype.createBook = function () {
        var isbn = readline.question("Enter ISBN: ");
        if (this.findBookByISBN(isbn)) {
            console.log("This book already exists!");
            return;
        }
        var title = readline.question("Enter title: ");
        var author = readline.question("Enter author: ");
        var year = readline.questionInt("Enter year of publication: ");
        var newBook = new Book_1.default(isbn, title, author, year);
        this.books.push(newBook);
        console.log("New book added!");
    };
    BookController.prototype.searchBook = function () {
        var isbn = readline.question("Enter ISBN to search: ");
        var book = this.findBookByISBN(isbn);
        if (book) {
            this.printBook(book);
        }
        else {
            console.log("No book found with ISBN: ".concat(isbn));
        }
    };
    BookController.prototype.editBook = function () {
        var isbn = readline.question("Enter ISBN to update: ");
        var book = this.findBookByISBN(isbn);
        if (!book) {
            console.log("No book found!");
            return;
        }
        var newTitle = readline.question("Enter new title: ");
        var newAuthor = readline.question("Enter new author: ");
        var newYear = readline.questionInt("Enter new year: ");
        book.setTitle(newTitle);
        book.setAuthor(newAuthor);
        book.setYear(newYear);
        console.log("Book updated.");
    };
    BookController.prototype.removeBook = function () {
        var isbn = readline.question("Enter ISBN to remove: ");
        var index = this.books.findIndex(function (b) { return b.getISBN() === isbn; });
        if (index === -1) {
            console.log("No book found!");
            return;
        }
        var removedBook = this.books.splice(index, 1)[0];
        console.log("Book removed: ".concat(removedBook.getTitle()));
    };
    BookController.prototype.displayBooks = function () {
        var _this = this;
        if (this.books.length === 0) {
            console.log(" No books in the list.");
            return;
        }
        console.log("Book list:");
        this.books.forEach(function (book, i) {
            console.log("\n--- Book ".concat(i + 1, " ---"));
            _this.printBook(book);
        });
    };
    BookController.prototype.printBook = function (book) {
        console.log("ISBN: ".concat(book.getISBN()));
        console.log("Title: ".concat(book.getTitle()));
        console.log("Author: ".concat(book.getAuthor()));
        console.log("Year of Publication: ".concat(book.getYear()));
    };
    return BookController;
}());
exports.default = BookController;
