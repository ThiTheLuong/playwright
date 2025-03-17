export class Animal {
    name: string;
    speed: number;

    constructor(name: string, maxSpeed: number) {
        this.name = name;
        this.speed = this.getRandomSpeed(maxSpeed);
    }

    private getRandomSpeed(maxSpeed: number): number {
        return Math.floor(Math.random() * maxSpeed) + 1;
    }
  
    public getSpeed(): number {
        return this.speed;
    }

    public getName(): string {
        return this.name;
    }

}