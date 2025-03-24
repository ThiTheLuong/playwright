import Employee from "./Employee";

export default class Contractor extends Employee {

    constructor(name: string) {
        super(40000, name);// lương hợp đồng là 40000
    }
}