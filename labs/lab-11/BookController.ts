import Book from "./Book";
const readline = require('readline-sync');

export default class BookController {
    private books: Book[] = [];

    constructor() {

        this.books.push(new Book("1", "Book 1", "Leo 1", 2020));
        this.books.push(new Book("2", "Book 2", "Leo 2", 2021));
    }

    public start(): void {
        let running = true;
        while (running) {
            this.showMenu();
            const option = readline.questionInt("Enter your choice: ");

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
    }

    private showMenu(): void {
        console.log(`
======== BOOK MANAGEMENT ========
1. Add new book
2. Find a book by ISBN
3. Update book details
4. Remove a book
5. Show book list
0. Exit
`);
    }

    private findBookByISBN(isbn: string): Book | undefined {
        return this.books.find(b => b.getISBN() === isbn);
    }

    private createBook(): void {
        const isbn = readline.question("Enter ISBN: ");
        if (this.findBookByISBN(isbn)) {
            console.log("This book already exists!");
            return;
        }

        const title = readline.question("Enter title: ");
        const author = readline.question("Enter author: ");
        const year = readline.questionInt("Enter year of publication: ");

        const newBook = new Book(isbn, title, author, year);
        this.books.push(newBook);
        console.log("New book added!");
    }

    private searchBook(): void {
        const isbn = readline.question("Enter ISBN to search: ");
        const book = this.findBookByISBN(isbn);
        if (book) {
            this.printBook(book);
        } else {
            console.log(`No book found with ISBN: ${isbn}`);
        }
    }

    private editBook(): void {
        const isbn = readline.question("Enter ISBN to update: ");
        const book = this.findBookByISBN(isbn);
        if (!book) {
            console.log("No book found!");
            return;
        }

        const newTitle = readline.question("Enter new title: ");
        const newAuthor = readline.question("Enter new author: ");
        const newYear = readline.questionInt("Enter new year: ");

        book.setTitle(newTitle);
        book.setAuthor(newAuthor);
        book.setYear(newYear);

        console.log("Book updated.");
    }

    private removeBook(): void {
        const isbn = readline.question("Enter ISBN to remove: ");
        const index = this.books.findIndex(b => b.getISBN() === isbn);

        if (index === -1) {
            console.log("No book found!");
            return;
        }

        const removedBook = this.books.splice(index, 1)[0];
        console.log(`Book removed: ${removedBook.getTitle()}`);
    }

    private displayBooks(): void {
        if (this.books.length === 0) {
            console.log(" No books in the list.");
            return;
        }

        console.log("Book list:");
        this.books.forEach((book, i) => {
            console.log(`\n--- Book ${i + 1} ---`);
            this.printBook(book);
        });
    }

    private printBook(book: Book): void {
        console.log(`ISBN: ${book.getISBN()}`);
        console.log(`Title: ${book.getTitle()}`);
        console.log(`Author: ${book.getAuthor()}`);
        console.log(`Year of Publication: ${book.getYear()}`);
    }
}