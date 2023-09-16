// 1. Membresias de Usuarios
interface IMembership {
    canBorrow(bookCount: number): boolean;
}

class BasicMembership implements IMembership {
    canBorrow(bookCount: number): boolean {
        return bookCount <= 2;
    }
}

class PremiumMembership implements IMembership {
    canBorrow(bookCount: number): boolean {
        return bookCount <= 5;
    }
}

class PlatinumMembership implements IMembership {
    canBorrow(bookCount: number): boolean {
        return true;
    }
}

//2. Categorizacion de libros
enum BookCategory {
    Fiction = "Ficción",
    NonFiction = "No Ficción",
    Reference = "Referencia",
}

class Book {
    constructor(
        public title: string,
        public author: string,
        public isLoaded: boolean = false,
        public isAvailable: string,
        public borrowedDate?: Date,
        public category: BookCategory
    ) {}
}

class User {
    static UserID: any;
    constructor(public UserID: string, public name: string, public membership: IMembership) {}
}

interface ILoadManager {
    loadBook(book: Book, user: User): void;
    returnBook(book: Book): void;
}

interface ILogger {
    log(message: string): void;
}

interface IFineManager {
    calculateFine(book: Book): number;
}

class FineManager implements IFineManager {
    private standardLoanPeriodInDays: number = 7;
    private fineRatePerDay: number = 1;

    calculateFine(book: Book): number {
        const currentDate = new Date();
        const dueDate = new Date(book.borrowedDate);
        dueDate.setDate(dueDate.getDate() + this.standardLoanPeriodInDays);

        if (currentDate > dueDate) {
            const daysLate = Math.ceil((currentDate - dueDate) / (1000 * 60 * 60 * 24));
            return daysLate * this.fineRatePerDay;
        }

        return 0;
    }
}

class ConsoleLogger implements ILogger {
    log(message: string): void {
        console.log(message);
    }
}

// Historial de prestamos
class LoanHistory {
    private history: { book: Book; user: User }[] = [];

    addLoan(book: Book, user: User) {
        this.history.push({ book, user });
    }

    getHistoryForUser(user: User): { book: Book; user: User }[] {
        return this.history.filter((entry) => entry.user === user);
    }
}

class Library implements ILoadManager {
    private books: Book[] = [];
    private loadBooks: Map<string, User> = new Map();
    private fineManager: IFineManager;
    private loanHistory: LoanHistory = new LoanHistory();

    constructor(private logger: ILogger, fineManager: IFineManager) {
        this.fineManager = fineManager;
    }

    loadBook(book: Book, user: User): void {
        if (book.isLoaded) {
            this.logger.log('Book is loaded');
            return;
        }
        if (book.category === BookCategory.Reference) {
            this.logger.log('Reference books cannot be borrowed');
            return;
        }
        if (!user.membership.canBorrow(this.loadBooks.size)) {
            this.logger.log('User has reached their borrowing limit');
            return;
        }
        book.borrowedDate = new Date();
        this.loadBooks.set(book.isAvailable, user);
        book.isLoaded = true;
        this.logger.log(`Información del usuario que está tomando prestado el libro:
        UserID: ${user.UserID}
        Nombre: ${user.name}`);
    }

    returnBook(book: Book): void {
        if (!book.isLoaded) {
            this.logger.log('Book is not loaded');
            return;
        }
        const user = this.loadBooks.get(book.isAvailable);
        if (user) {
            this.loadBooks.delete(book.isAvailable);
            book.isLoaded = false;
            this.logger.log(`Información del usuario que está devolviendo el libro:
            UserID: ${user.UserID}
            Nombre: ${user.name}`);
            const fine = this.fineManager.calculateFine(book);
            if (fine > 0) {
                this.logger.log(`Multa generada: $${fine}`);
            }
            this.loanHistory.addLoan(book, user);
        } else {
            this.logger.log('No se encontró al usuario que está devolviendo el libro');
        }
    }

    addBook(book: Book) {
        this.logger.log('Inicio de operación');
        this.books.push(book);
        this.logger.log('Fin de operación');
    }

    validateBookTitle(book: Book, tituloL: string) {
        if (book.title !== tituloL) {
            this.logger.log('El libro no tiene el título correcto');
        } else {
            this.logger.log('El libro tiene el título correcto');
        }
    }

    findBookByTitle(title: string): Book | undefined {
        this.logger.log('Inicio de operación');
        const book = this.books.find(book => book.title === title);
        if (!book) {
            this.logger.log('No se encontró el libro');
        }
        return book;
    }
}

// Ejemplo de uso
const logger = new ConsoleLogger();
const fineManager = new FineManager();
const library = new Library(logger, fineManager);

const basicUser = new User("1", "Usuario Básico", new BasicMembership());
const premiumUser = new User("2", "Usuario Premium", new PremiumMembership());
const platinumUser = new User("3", "Usuario Platino", new PlatinumMembership());

const book1 = new Book("Libro 1", "Autor 1", false, "ISBN-1", undefined, BookCategory.Fiction);
const book2 = new Book("Libro 2", "Autor 2", false, "ISBN-2", undefined, BookCategory.NonFiction);
const book3 = new Book("Libro 3", "Autor 3", false, "ISBN-3", undefined, BookCategory.Reference);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.loadBook(book1, basicUser);
library.loadBook(book2, premiumUser);
library.loadBook(book3, platinumUser);

library.returnBook(book1);
library.returnBook(book2);
library.returnBook(book3);

const basicUserHistory = library.loanHistory.getHistoryForUser(basicUser);
const premiumUserHistory = library.loanHistory.getHistoryForUser(premiumUser);
const platinumUserHistory = library.loanHistory.getHistoryForUser(platinumUser);

console.log("Historial de préstamos para Usuario Básico:", basicUserHistory);
console.log("Historial de préstamos para Usuario Premium:", premiumUserHistory);
console.log("Historial de préstamos para Usuario Platino:", platinumUserHistory);
