"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book(ISBN, title, author, year) {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    Book.prototype.getISBN = function () {
        return this.ISBN;
    };
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getYear = function () {
        return this.year;
    };
    Book.prototype.setISBN = function (ISBN) {
        this.ISBN = ISBN;
    };
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.setYear = function (year) {
        this.year = year;
    };
    return Book;
}());
exports.default = Book;
