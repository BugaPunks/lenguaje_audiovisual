class Vehicle {
    type: string;
    engine: string;
    wheels: number;
    color: string;
    brand: string;
    fuel: string;

    constructor(type: string, engine: string, wheels: number, color: string, brand: string, fuel: string) {
        this.type = type;
        this.engine = engine;
        this.wheels = wheels;
        this.color = color;
        this.brand = brand;
        this.fuel = fuel;
    }
}

const myCar = new Vehicle('car', 'V8', 4, 'red', 'Ford', 'gasoline');

//==========SOLUCION===============//
class VehicleBuilder {
    private type: string;
    private engine: string;
    private wheels: number;
    private color: string;
    private brand: string;
    private fuel: string;

    constructor(type: string) {
        this.type = type;
        this.engine = '';
        this.wheels = 0;
        this.color = '';
        this.brand = '';
        this.fuel = '';
    }

    setEngine(engine: string) {
        this.engine = engine;
        return this;
    }

    setWheels(wheels: number) {
        this.wheels = wheels;
        return this;
    }

    setColor(color: string) {
        this.color = color;
        return this;
    }

    setBrand(brand: string) {
        this.brand = brand;
        return this;
    }

    setFuel(fuel: string) {
        this.fuel = fuel;
        return this;
    }

    build() {
        return new Vehicle(this.type, this.engine, this.wheels, this.color, this.brand, this.fuel);
    }
}

// Crear un vehículo usando el Builder
const myCar = new VehicleBuilder('car')
    .setEngine('V8')
    .setWheels(4)
    .setColor('red')
    .setBrand('Ford')
    .setFuel('gasoline')
    .build();
