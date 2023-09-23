// dbService.ts

export class DatabaseService {
    private connectionString: string;

    constructor(connectionString: string) {
        this.connectionString = connectionString;
    }

    connect(): void {
        // Lógica para conectar a la base de datos
        console.log(`Connecting to database with ${this.connectionString}`);
    }
}

// app.ts

import { DatabaseService } from './dbService';

let dbService1 = new DatabaseService("mongodb://localhost/db1");
let dbService2 = new DatabaseService("mongodb://localhost/db1"); // Nota que es la misma dirección que dbService1

dbService1.connect();
dbService2.connect();

//===============SOLUCION================//

export class DatabaseService {

    private static instance: DatabaseService;

    private connectionString: string;

    private constructor(connectionString: string) {
        this.connectionString = connectionString;
    }

    static getInstance(connectionString: string) {
        if (!DatabaseService.instance) {
            DatabaseService.instance = new DatabaseService(connectionString);
        }
        return DatabaseService.instance;
    }

    connect() {
        console.log(`Connecting to ${this.connectionString}`);
    }

}


import { DatabaseService } from './dbService';
const db = DatabaseService.getInstance("mongodb://localhost/db1");
db.connect();
const db2 = DatabaseService.getInstance("mongodb://localhost/db1");
db2.connect();