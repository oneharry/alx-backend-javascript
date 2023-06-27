export default function createReportObject(employeesList) {
  const employees = {
    ...employeesList,
  };

  const getNumberOfDepartments = () => Object.keys(employees).length;

  return {
    employees,
    getNumberOfDepartments,
  };
}
