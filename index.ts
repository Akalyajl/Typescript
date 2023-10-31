interface Payload{
    massKg:number;
}
class Astronaut implements Payload{
    massKg:number=0;
    name:string='';
    constructor(massKg: number, name: string){
        this.massKg=massKg;
        this.name=name;
    }
}
class Cargo implements Payload{
    massKg:number=0;
    material:string='';
    constructor(massKg:number, material:string){
        this.massKg=massKg;
        this.material=material;
    }
}
class Rocket implements Payload{
    name:string='';
    totalCapacityKg:number=0;
    cargoItems:Cargo[]=[];
    astronauts:Astronaut[]=[];
    constructor(name: string, totalCapacityKg: number){
        this.name=name;
        this.totalCapacityKg=totalCapacityKg;
    }

    sumMass=(items: Payload[]): number=> {
        return items.reduce((sum, item) => sum + item.massKg, 0);
    }
    currentMassKg(): number{
        const cargoMass = this.sumMass(this.cargoItems);
        const astronautMass = this.sumMass(this.astronauts);
        return cargoMass + astronautMass;
    };

    canAdd=(item: Payload): boolean=>{
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }
    addCargo=(cargo: Cargo): boolean=>{
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    };

    addAstronaut=(astronaut: Astronaut): boolean=>{
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    };
}

const myRocket = new Rocket("SpaceX Starship", 9000);
const cargo1 = new Cargo(1000, "Supplies");
const cargo2 = new Cargo(10000, "Satellites");
const astronaut1 = new Astronaut(800, "John");
const astronaut2 = new Astronaut(40, "Anah");
console.log("Rocket can add astronaut1:", myRocket .addAstronaut(astronaut1));
console.log("Rocket can add cargo1:", myRocket .addCargo(cargo1));
console.log("Rocket can add astronaut2:", myRocket .addAstronaut(astronaut2));
console.log("Rocket can add cargo2:", myRocket .addCargo(cargo2));
console.log("Rocket current mass:", myRocket.currentMassKg());


