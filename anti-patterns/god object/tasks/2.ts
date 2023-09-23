class AirportSystem {
    flights: any[] = [];
    passengers: any[] = [];
    crews: any[] = [];
    planesMaintenance: any[] = [];
    financialRecords: any[] = [];

    // Métodos relacionados con vuelos
    scheduleFlight(flight: any) {
        this.flights.push(flight);
    }

    // Métodos relacionados con pasajeros
    checkInPassenger(passenger: any) {
        this.passengers.push(passenger);
    }

    // Métodos relacionados con tripulaciones
    assignCrewToFlight(crew: any, flightID: string) {
        this.crews.push({ ...crew, flightID });
    }

    // Métodos relacionados con el mantenimiento de aviones
    logMaintenance(planeID: string, maintenance: any) {
        this.planesMaintenance.push({ planeID, ...maintenance });
    }

    // Métodos relacionados con facturación y contabilidad
    recordFinancialTransaction(transaction: any) {
        this.financialRecords.push(transaction);
    }
}

//============SOLUCION***************//

class Flight {
    constructor(public flightID: string) { }
}

class FlightScheduler {
    flights: Flight[] = [];

    scheduleFlight(flight: Flight) {
        this.flights.push(flight);
    }
}

class Passenger {
    constructor(public name: string) { }
}

class PassengerCheckIn {
    passengers: Passenger[] = [];

    checkInPassenger(passenger: Passenger) {
        this.passengers.push(passenger);
    }
}

class Crew {
    constructor(public name: string) { }
}

class CrewAssignment {
    crews: Crew[] = [];

    assignCrewToFlight(crew: any, flightID: string) {
        this.crews.push({ ...crew, flightID });
    }
}

class PlaneMaintenance {
    planesMaintenance: any[] = [];
    logMaintenance(planeID: string, maintenance: any) {
        this.planesMaintenance.push({ planeID, ...maintenance });
    }
}

class FinancialRecord {
    constructor(public transaction: any) { }
}

class FinancialTransactionRecorder {
    financialRecords: FinancialRecord[] = [];

    recordFinancialTransaction(transaction: any) {
        this.financialRecords.push(new FinancialRecord(transaction));
    }
}
