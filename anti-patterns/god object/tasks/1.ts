class Cinema {
    movies: any[] = [];
    snacks: any[] = [];
    tickets: any[] = [];
    employees: any[] = [];

    // Métodos relacionados con películas
    addMovie(movie: any) {
        this.movies.push(movie);
    }

    // Métodos relacionados con snacks
    buySnack(snack: any) {
        this.snacks.push(snack);
    }

    // Métodos relacionados con entradas
    buyTicket(ticket: any) {
        this.tickets.push(ticket);
    }

    // Métodos relacionados con empleados
    hireEmployee(employee: any) {
        this.employees.push(employee);
    }
}

//============SOLUCION***************//
class Movie {
    constructor(public title: string) {}
}

class MovieCatalog {
    movies: Movie[] = [];

    addMovie(movie: Movie) {
        this.movies.push(movie);
    }
}

class Snack {
    constructor(public name: string, public price: number) {}
}

class SnackShop {
    snacks: Snack[] = [];

    buySnack(snack: Snack) {
        this.snacks.push(snack);
    }
}

class Ticket {
    constructor(public movie: Movie, public price: number) {}
}

class TicketCounter {
    tickets: Ticket[] = [];

    buyTicket(ticket: Ticket) {
        this.tickets.push(ticket);
    }
}


class Employee {
    constructor(public name: string) {}
}

class EmployeeManager {
    employees: Employee[] = [];

    hireEmployee(employee: Employee) {
        this.employees.push(employee);
    }
}
