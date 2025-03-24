import Employee from "./Employee";
import FTEEmployee from "./FTE";
import ContractEmployee from "./Contractor";
import EmployeeController from "./EmployeeController";

let Thi = new FTEEmployee("Thi");
let The = new FTEEmployee("The");
let Luong = new ContractEmployee("Luong");


let employeeController = new EmployeeController();
let employeeList = [Thi, The, Luong];

//Tính tổng lương
let total: number = employeeController.getTotalSalary(employeeList);
console.log("Total salary: " + total);

//Nhân viên có lương cao nhất
let theBestEmployee = employeeController.getBestSalary(employeeList);
console.log("The best employee who have highest salary " + theBestEmployee.getName() + " with salary: " + theBestEmployee.getSalary());

// Nhân viên có lương thấp nhất
let theLowestEmployee = employeeController.getLowestSalary(employeeList);
console.log("The employee who have lowest salary: " + theLowestEmployee.getName() + " with salary: " + theLowestEmployee.getSalary());

//In danh sách nhân viên
console.log("\nEmployee list:");
employeeController.printEmployeeList(employeeList);

//Sắp xếp nhân viên
// Làm ing....
