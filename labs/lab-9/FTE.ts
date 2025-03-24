import Employee from "./Employee";

export default class FTE extends Employee {
    constructor(name: string) {
        super(50000, name); //lương cố định là 50,000
    }
}