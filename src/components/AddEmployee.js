import React from 'react';
import PropTypes from 'prop-types';

class AddEmployee extends React.Component { 
    state = {
        firstName: "",
        lastName: "",
        numOfDependants: 0,
        numOfDependantsWithANames: 0
    }

    onChange = (e) => this.setState({
        [e.target.name]: [e.target.value]
    })

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addEmployee(this.state.firstName, this.state.lastName, this.state.numOfDependants, this.state.numOfDependantsWithANames);
    }

    addDependant = (name) => this.setState({
        dependantNames: [...this.state.depedantNames, name]
    })

    render()
    {
        let selectOptions = [];
        for(var i = 0; i <= 15; i++){
            selectOptions.push(<option key={i} value={i}>{i}</option>) 
        }
        let selectANamesOptions = [];
        for(var j = 0; j <= this.state.numOfDependants; j++){
            selectANamesOptions.push(<option key={j} value={j}>{j}</option>)
        }
        return(
        <form onSubmit={this.onSubmit}>
            <label> Employee First Name: 
                 <input type="text" name="firstName" placeholder="Employee First Name" onChange={this.onChange}/>
            </label>
            <label> Employee Last Name: 
                <input type="text" name="lastName" placeholder="Employee Last Name" onChange={this.onChange}/>
            </label>
            <label className="dropdown">Number of Dependants:
                <select name="numOfDependants" className="dropdown-content" defaultValue="0" onChange={this.onChange}>                
                    {selectOptions}                
                </select>
            </label><br/>
            <label className="dropdown">Number of Dependants Whose <b>First</b> Name Begins with <b>'A'</b>:
                <select name="numOfDependantsWithANames" className="dropdown-content" defaultValue="0" onChange={this.onChange}>
                    {selectANamesOptions}
                </select>
            </label>
            <input className="submit" type="submit" value="Submit"/>
        </form>
    ) 
    }  
}

//PropTypes
AddEmployee.propTypes = {
    addEmployee: PropTypes.func.isRequired
  }

export default AddEmployee;