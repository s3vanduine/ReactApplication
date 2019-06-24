import React from 'react';
import EmployeeProfile from './EmployeeProfile';
import PropTypes from 'prop-types';

class Employees extends React.Component {

  calculateTotal = (employees) => {
    var totalPaychecks = 0 
    employees.forEach(employee => {
       totalPaychecks += employee.paycheckWithBenefits;
    })
    return totalPaychecks;
  }

  render()
  {
    return (
      <table>
        <tbody>
        <tr key="Headers">
          {/* <th></th> */}
          <th>Employee</th>
          <th>Dependants</th>
          <th>Standard Cost per Year</th>
          <th>Discount</th>
          <th>Stardard Cost per Year Post Discount</th>
          <th>Cost of Benefits per Paycheck</th>
          <th>Paycheck</th>
          <th></th>
        </tr>
        {
          this.props.employees.map((employee) => (
            <EmployeeProfile key = { employee.id }
              employee = { employee }
              selectEmployee = {this.props.selectEmployee} 
              deleteEmployee = {this.props.deleteEmployee}
            />
          ))
        }
        <tr className="total">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Total: {this.calculateTotal(this.props.employees)}</td>
        </tr>
        </tbody>
      </table>
      
    );
  }  
}

//PropTypes
Employees.propTypes = {
  employees: PropTypes.array.isRequired,
  selectEmployee: PropTypes.func.isRequired,
  deleteEmployee: PropTypes.func.isRequired
}
 
export default Employees;
