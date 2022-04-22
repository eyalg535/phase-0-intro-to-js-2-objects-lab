const employee = {
    name: "Eyal",
    streetAddress: "6544 Saunders",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const employees = { ...employee };
    employees[key] = value;
    return employees;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value){
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    delete newEmployee.key;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    employee[key] = value;
    delete employee.key;
    return employee;
}