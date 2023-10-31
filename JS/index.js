"use strict";
class Astronaut {
    constructor(massKg, name) {
        this.massKg = 0;
        this.name = '';
        this.massKg = massKg;
        this.name = name;
    }
}
class Cargo {
    constructor(massKg, material) {
        this.massKg = 0;
        this.material = '';
        this.massKg = massKg;
        this.material = material;
    }
}
class Rocket {
    constructor(name, totalCapacityKg) {
        this.name = '';
        this.totalCapacityKg = 0;
        this.cargoItems = [];
        this.astronauts = [];
        this.sumMass = (items) => {
            return items.reduce((sum, item) => sum + item.massKg, 0);
        };
        this.canAdd = (item) => {
            return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
        };
        this.addCargo = (cargo) => {
            if (this.canAdd(cargo)) {
                this.cargoItems.push(cargo);
                return true;
            }
            else {
                return false;
            }
        };
        this.addAstronaut = (astronaut) => {
            if (this.canAdd(astronaut)) {
                this.astronauts.push(astronaut);
                return true;
            }
            else {
                return false;
            }
        };
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    currentMassKg() {
        const cargoMass = this.sumMass(this.cargoItems);
        const astronautMass = this.sumMass(this.astronauts);
        return cargoMass + astronautMass;
    }
    ;
}
const myRocket = new Rocket("SpaceX Starship", 9000);
const cargo1 = new Cargo(1000, "Supplies");
const cargo2 = new Cargo(10000, "Satellites");
const astronaut1 = new Astronaut(800, "John");
const astronaut2 = new Astronaut(40, "Anah");
console.log("Rocket can add astronaut1:", myRocket.addAstronaut(astronaut1));
console.log("Rocket can add cargo1:", myRocket.addCargo(cargo1));
console.log("Rocket can add astronaut2:", myRocket.addAstronaut(astronaut2));
console.log("Rocket can add cargo2:", myRocket.addCargo(cargo2));
console.log("Rocket current mass:", myRocket.currentMassKg());
