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