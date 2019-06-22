import React from 'react';
import PropTypes from 'prop-types';

class EmployeeProfile extends React.Component { 
//TODO: getStyle that highlights current for editing functionality

  render()
  {
    const {id, firstName, lastName, numOfDependants, standardCost, discount, postDiscount, costOfBenefitsPerPaycheck} = this.props.employee
   return(
        <tr>
            <td><input type="checkbox" onChange={ this.props.selectEmployee.bind(this, id)}></input></td>
            <td>{ firstName + ' ' + lastName }</td>
            <td>{ numOfDependants }</td>
            <td>{ standardCost }</td>
            <td>{ discount }</td>
            <td>{ postDiscount }</td>
            <td>{ costOfBenefitsPerPaycheck }</td>
            <td><button onClick={this.props.deleteEmployee.bind(this, id)}>delete</button></td>
        </tr>
   ) 
  }  
}

//PropTypes
EmployeeProfile.propTypes = {
    employee: PropTypes.object.isRequired
  }

export default EmployeeProfile;
