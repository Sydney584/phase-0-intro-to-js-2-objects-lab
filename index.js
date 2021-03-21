const employee = {
    name: `Sydney`,
    streetAddress: `10 Beach`
  };
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee.name = `Sam`,
    newEmployee.streetAddress = `11 Broadway`
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = `Sam`,
    employee.streetAddress = `12 Broadway`
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee.name;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee
}



  

 




