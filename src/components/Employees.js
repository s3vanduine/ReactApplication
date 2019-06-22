import React from 'react';
import EmployeeProfile from './EmployeeProfile';
import PropTypes from 'prop-types';

class Employees extends React.Component {

  render()
  {
    return (
      <table>
        <tbody>
        <tr key="Headers">
          <th></th>
          <th>Employee</th>
          <th>Dependants</th>
          <th>Standard Cost per Year</th>
          <th>Discount</th>
          <th>Stardard Cost per Year Post Discount</th>
          <th>Cost of Benefits per Paycheck</th>
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
        </tbody>
      </table>
      
    );
  }  
}

//PropTypes
Employees.propTypes = {
  employees: PropTypes.array.isRequired
}
 
export default Employees;
