class Pizza {
    size: string;
    cheese: boolean;
    pepperoni: boolean;
    mushrooms: boolean;
    bacon: boolean;

    constructor(size: string, cheese: boolean, pepperoni: boolean, mushrooms: boolean, bacon: boolean) {
        this.size = size;
        this.cheese = cheese;
        this.pepperoni = pepperoni;
        this.mushrooms = mushrooms;
        this.bacon = bacon;
    }
}

const myPizza = new Pizza('large', true, true, false, true);

//=============SOLUCION===============//
class PizzaBuilder {
    private size: string;
    private cheese: boolean;
    private pepperoni: boolean;
    private mushrooms: boolean;
    private bacon: boolean;

    constructor(size: string) {
        this.size = size;
        this.cheese = false;
        this.pepperoni = false;
        this.mushrooms = false;
        this.bacon = false;
    }

    addCheese() {
        this.cheese = true;
        return this;
    }

    addPepperoni() {
        this.pepperoni = true;
        return this;
    }

    addMushrooms() {
        this.mushrooms = true;
        return this;
    }

    addBacon() {
        this.bacon = true;
        return this;
    }

    build() {
        return new Pizza(this.size, this.cheese, this.pepperoni, this.mushrooms, this.bacon);
    }
}

// Crear una pizza usando el Builder
const myPizza = new PizzaBuilder('large')
    .addCheese()
    .addPepperoni()
    .addBacon()
    .build();
