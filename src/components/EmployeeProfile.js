import React from 'react';
import PropTypes from 'prop-types';

class EmployeeProfile extends React.Component { 
//TODO: getStyle that highlights current for editing functionality

  render()
  {
    const {id, firstName, lastName, numOfDependants, payCheck} = this.props.employee
   return(
        <tr>
            <td><input type="checkbox" onChange={ this.props.selectEmployee.bind(this, id)}></input></td>
            <td>{ firstName + ' ' + lastName }</td>
            <td>{ numOfDependants }</td>
            <td>{ payCheck }</td>
            <td><button onClick={this.props.deleteEmployee.bind(this, id)}>delete</button></td>
        </tr>
   ) 
  }  
}

//PropTypes
EmployeeProfile.propTypes = {
    employees: PropTypes.object.isRequired
  }

export default EmployeeProfile;
