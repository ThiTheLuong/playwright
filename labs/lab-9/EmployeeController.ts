import Employee from "./Employee";

export default class EmployeeController {
    //Tính tổng lương của tất cả nhân viên
    getTotalSalary(employeeList: Employee[]): number {
        return employeeList.reduce((total, emp) => total + emp.getSalary(), 0);
    }

    //Tìm nhân viên có lương cao nhất
    getBestSalary(employeeList: Employee[]): Employee {
        return employeeList.reduce((maxEmp, emp) =>
            emp.getSalary() > maxEmp.getSalary() ? emp : maxEmp
        );
    }

    //Tìm nhân viên có lương thấp nhất
    getLowestSalary(employeeList: Employee[]): Employee {
        return employeeList.reduce((minEmp, emp) =>
            emp.getSalary() < minEmp.getSalary() ? emp : minEmp
        );
    }

    //In danh sách nhân viên
    printEmployeeList(employeeList: Employee[]) {
        employeeList.forEach(emp => {
            console.log(`- ${emp.getName()} | Salary: ${emp.getSalary()}`);
        });
    }
    // Sắp xếp nhân viên tăng/ giảm dần
    // Làm ing....



}