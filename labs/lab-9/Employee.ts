export default class Employee {
    protected salary: number;
    protected name: string
    constructor(salary: number, name: string) {
        this.salary = salary;
        this.name = name

    }
    getSalary(): number {
        return this.salary;
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): string {
        return this.name = name;
    }
    setSalary(salary: number): number {
        return this.salary = salary;
    }
}