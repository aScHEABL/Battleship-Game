class Ship {
    constructor(length, hitTimes = 0, status = "operational") {
        this.length = length;
        this.hitTimes = hitTimes;
        this.status = status;
    }
    hit() {
        this.hitTimes++;
        if (this.hitTimes === this.length) this.isSunk();
    }
    isSunk() {
        this.status = "sunk";
        console.log("This ship is sunk");
    }
}

module.exports = Ship;