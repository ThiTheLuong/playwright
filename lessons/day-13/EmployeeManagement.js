const Employee = require('.Employee/');
const SalaryController = require('./SalaryController');
//create data
let teo = new Employee("Teo", 10000);
let ti = new Employee("Ti", 10000);
// init controller
let salaryController = new SalaryController();

const totalSalary = salaryController.getTotalSalary([teo,ti]);
console.log(totalSalary);
