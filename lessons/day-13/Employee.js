class Employee {
    constructor (name, salary)
    {
        this._name = name;
        this._salary = salary;
    }
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    get salary(){
        return this.salary;
    }
    set salary(salary){
        this.salary = salary;
    }
}
module.exports = Employee;