"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FTE_1 = require("./FTE");
var Contractor_1 = require("./Contractor");
var EmployeeController_1 = require("./EmployeeController");
var Thi = new FTE_1.default("Thi");
var The = new FTE_1.default("The");
var Luong = new Contractor_1.default("Luong");
var employeeController = new EmployeeController_1.default();
var employeeList = [Thi, The, Luong];
//Tính tổng lương
var total = employeeController.getTotalSalary(employeeList);
console.log("Total salary: " + total);
//Nhân viên có lương cao nhất
var theBestEmployee = employeeController.getBestSalary(employeeList);
console.log("The best employee who have highest salary " + theBestEmployee.getName() + " with salary: " + theBestEmployee.getSalary());
// Nhân viên có lương thấp nhất
var theLowestEmployee = employeeController.getLowestSalary(employeeList);
console.log("The employee who have lowest salary: " + theLowestEmployee.getName() + " with salary: " + theLowestEmployee.getSalary());
//In danh sách nhân viên
console.log("\nEmployee list:");
employeeController.printEmployeeList(employeeList);
//Sắp xếp nhân viên
// Làm ing....
