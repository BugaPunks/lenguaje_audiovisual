class Computer {
    components: string[] = [];

    addComponent(component: string) {
        this.components.push(component);
    }

    showConfiguration() {
        console.log(`This computer has: ${this.components.join(', ')}`);
    }
}

const myComputer = new Computer();
myComputer.addComponent('16GB RAM');
myComputer.addComponent('1TB SSD');
myComputer.addComponent('Intel i7 Processor');
myComputer.showConfiguration();

//===========SOLUCION===============//

interface ComputerComponent {
    showConfiguration(): void;
}

class Computer implements ComputerComponent {
    components: string[] = [];

    addComponent(component: string) {
        this.components.push(component);
    }

    showConfiguration() {
        console.log(`This computer has: ${this.components.join(', ')}`);
    }
}

abstract class ComputerDecorator implements ComputerComponent {
    protected computer: ComputerComponent;

    constructor(computer: ComputerComponent) {
        this.computer = computer;
    }

    abstract showConfiguration(): void;
}

class AdditionalDescriptionDecorator extends ComputerDecorator {
    private additionalDescription: string;

    constructor(computer: ComputerComponent, additionalDescription: string) {
        super(computer);
        this.additionalDescription = additionalDescription;
    }

    showConfiguration() {
        this.computer.showConfiguration();
        console.log(`Additional Description: ${this.additionalDescription}`);
    }
}

const myComputer = new Computer();
myComputer.addComponent('16GB RAM');
myComputer.addComponent('1TB SSD');
myComputer.addComponent('Intel i7 Processor');
myComputer.showConfiguration();