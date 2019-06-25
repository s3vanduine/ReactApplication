import React from 'react';
import PropTypes from 'prop-types';

class EmployeeProfile extends React.Component { 
    
  render()
  {
    const {id, firstName, lastName, numOfDependants, standardCost, discount, postDiscount, costOfBenefitsPerPaycheck, paycheckWithBenefits } = this.props.employee
   return(
        <tr>
            <td>{ firstName + ' ' + lastName }</td>
            <td>{ numOfDependants }</td>
            <td>{ standardCost }</td>
            <td>{ discount }</td>
            <td>{ postDiscount }</td>
            <td>{ costOfBenefitsPerPaycheck }</td>
            <td>{ paycheckWithBenefits }</td>
            <td><button onClick={this.props.deleteEmployee.bind(this, id)}>delete</button></td>
        </tr>
   ) 
  }  
}

//PropTypes
EmployeeProfile.propTypes = {
    employee: PropTypes.object.isRequired,

  }

export default EmployeeProfile;
