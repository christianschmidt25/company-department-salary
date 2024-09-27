// Task 1: Create a Department Structure
// This will include the department name, and employees within the department. Each employee will have a name, salary, and maybe subordinates. This department structure will be used in future functions.

const company = {
    departments: [
        {departmentName: "Engineering",
            employees: [
                {
                    name: "Jolie",
                    salary: 100000,
                    subordinates: [
                        {
                            name: "Sofia",
                            salary: 80000,
                            subordinates: [
                                {
                                    name: "Isaac",
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                }, 
                {
                    name: "Charlotte",
                    salary: 95000,
                    subordinates: []
                }    
            ]
        },
        {departmentName: "Sales",
            employees: [
                {
                    name: "Christian",
                    salary: 200000,
                    subordinates: [
                        {
                            name: "Zach",
                            salary: 160000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: "Aatish",
                    salary: 190000,
                    subordinates: []
                }
            ]
        }
    ]
};

console.log("Company Structure:", company)


// Task 2: Create a Recursive Function to Calculate Total Salary for a Department
// This function will be able to calculate the entire salary for both the Engineering and Sales departments. It will add each employee and their subordinates to create one total salary.

function calculateDepartmentSalary(departmentName) {
    const department = company.departments.find(department => department.departmentName === departmentName);

    function calculateEmployeeSalary(employee) {
        let totalSalary = employee.salary;

        const subordinates = employee.subordinates;
        for (let subordinate of subordinates) {
            totalSalary += calculateEmployeeSalary(subordinate);
        }
    return totalSalary;
    }

    let totalDepartmentSalary = 0;
    for (let employee of department.employees) {
        totalDepartmentSalary += calculateEmployeeSalary(employee);   
    }
    return totalDepartmentSalary;
}

console.log(`The Total Salary for the Engineering Department is $${calculateDepartmentSalary("Engineering")}.`);
console.log(`The Total Salary for the Sales Department is $${calculateDepartmentSalary("Sales")}.`);
