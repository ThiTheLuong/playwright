"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(salary, name) {
        this.salary = salary;
        this.name = name;
    }
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.setName = function (name) {
        return this.name = name;
    };
    Employee.prototype.setSalary = function (salary) {
        return this.salary = salary;
    };
    return Employee;
}());
exports.default = Employee;
