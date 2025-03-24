"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmployeeController = /** @class */ (function () {
    function EmployeeController() {
    }
    //Tính tổng lương của tất cả nhân viên
    EmployeeController.prototype.getTotalSalary = function (employeeList) {
        return employeeList.reduce(function (total, emp) { return total + emp.getSalary(); }, 0);
    };
    //Tìm nhân viên có lương cao nhất
    EmployeeController.prototype.getBestSalary = function (employeeList) {
        return employeeList.reduce(function (maxEmp, emp) {
            return emp.getSalary() > maxEmp.getSalary() ? emp : maxEmp;
        });
    };
    //Tìm nhân viên có lương thấp nhất
    EmployeeController.prototype.getLowestSalary = function (employeeList) {
        return employeeList.reduce(function (minEmp, emp) {
            return emp.getSalary() < minEmp.getSalary() ? emp : minEmp;
        });
    };
    //In danh sách nhân viên
    EmployeeController.prototype.printEmployeeList = function (employeeList) {
        employeeList.forEach(function (emp) {
            console.log("- ".concat(emp.getName(), " | Salary: ").concat(emp.getSalary()));
        });
    };
    return EmployeeController;
}());
exports.default = EmployeeController;
