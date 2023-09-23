class Room {
    paint: string;
    design: string;

    constructor(paint: string) {
        this.paint = paint;
        this.design = '';
    }

    applyDesign(design: string) {
        this.design += design;
    }

    showRoom() {
        console.log(`This room is painted with ${this.paint} and has a ${this.design} design.`);
    }
}

const myRoom = new Room('blue');
myRoom.applyDesign('stripe');
myRoom.showRoom();

//=============SOLUCION================//
function decorateRoom(target: any, key: string) {
    let value = target[key];

    const getter = function () {
        return `This room is painted with ${this.paint} and has a ${this.design} design.`;
    };

    const setter = function (newDesign: string) {
        this.design = newDesign;
    };

    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });
}

class Room {
    paint: string;
    design: string;

    constructor(paint: string) {
        this.paint = paint;
        this.design = '';
    }

    @decorateRoom
    showRoom() { }
}

const myRoom = new Room('blue');
myRoom.applyDesign('stripe');
myRoom.showRoom();
