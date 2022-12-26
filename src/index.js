class Carrier {
    constructor(length = 5, health = 5, sunk = false) {
        this.length = length;
        this.health = health;
        this.sunk = sunk;
    }
    hit() {
        this.health--;
    }
    destroy() {
        this.sunk = true;
    }
}

class Battleship {
    constructor(length = 4, health = 4, sunk = false) {
        this.length = length;
        this.health = health;
    }
    hit() {
        this.health--;
    }
    destroy() {
        this.sunk = true;
    }
}

class Destroyer {
    constructor(length = 3, health = 3, sunk = false) {
        this.length = length;
        this.health = health;
        this.sunk = sunk;
    }
    hit() {
        this.health--;
    }
    destroy() {
        this.sunk = true;
    }
}

class Submarine {
    constructor(length = 2, health = 2, sunk = false) {
        this.length = length;
        this.health = health;
        this.sunk = sunk;
    }
    hit() {
        this.health--;
    }
    destroy() {
        this.sunk = true;
    }
}

class PatrolBoat {
    constructor(length = 1, health = 1, sunk = false) {
        this.length = length;
        this.health = health;
        this.sunk = sunk;
    }
    hit() {
        this.health--;
    }
    destroy() {
        this.sunk = true;
    }
}

const carrierA = new Carrier();
const battleshipA = new Battleship();
const destroyerA = new Destroyer();
const SubmarineA = new Submarine();
const boatA = new PatrolBoat();

module.exports = {Carrier, Battleship, Destroyer, Submarine, PatrolBoat};