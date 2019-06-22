import React from 'react';
import PropTypes from 'prop-types';

class AddEmployee extends React.Component { 
    state = {
        //employee: {
            firstName: "",
            lastName: "",
            numOfDependants: 0
        //}
    }

    onChange = (e) => this.setState({
        [e.target.name]: [e.target.value]
    })

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addEmployee(this.state.firstName, this.state.lastName, this.state.numOfDependants);
    }

    render()
    {
    return(
        <form onSubmit={this.onSubmit}>
            <input type="text" name="firstName" placeholder="Employee First Name" onChange={this.onChange}/>
            <input type="text" name="lastName" placeholder="Employee Last Name" onChange={this.onChange}/>
            <input type="text" name="numOfDependants" placeholder="Employee Number of Dependants" onChange={this.onChange}/>
            <input type="submit" value="submit"/>
        </form>
    ) 
    }  
}

//PropTypes
AddEmployee.propTypes = {
    addEmployee: PropTypes.func.isRequired
  }

export default AddEmployee;