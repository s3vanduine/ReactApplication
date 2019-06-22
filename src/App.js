import React from 'react';
import Employees from './components/Employees';
import Header from './components/layout/Header';
import AddEmployee from './components/AddEmployee';
import uuid from 'uuid';

class App extends React.Component {
  state = {
    employees: [
      {
        id: uuid.v4(),
        firstName: 'Sarah',
        lastName: 'VanDuine', 
        numOfDependants: 2,
        payCheck: 2000
      },
      {
        id: uuid.v4(),
        firstName: 'James',
        lastName: 'Jamison', 
        numOfDependants: 4,
        payCheck: 2000
      },
      {
        id: uuid.v4(),
        firstName: 'Indiana',
        lastName: 'Jones', 
        numOfDependants: 0,
        payCheck: 2000
      }
    ]
  }

  //Use for calculations
  selectEmployee = (id) => {
    this.setState({ employees: this.state.employees.map(employee => {
      if(employee.id === id){
        console.log("Id " + {id} + " selected")
        //set values equal to the returned values
      }
      return employee
    })
    });
  }

  deleteEmployee = (id) => {
    this.setState({ employees: [...this.state.employees.filter(employee => employee.id !== id)]})
  }

  addEmployee = (firstName, lastName, numOfDependants) => {
    const newEmployee = {
      id: uuid.v4(),
      firstName,
      lastName,
      numOfDependants
    }
    this.setState({
      employees: [...this.state.employees, newEmployee]
    })
  }

  render()
  {
    console.log(this.state.employees);
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddEmployee 
            addEmployee = {this.addEmployee}
          />
          <Employees 
            employees = {this.state.employees}
            selectEmployee = {this.selectEmployee}
            deleteEmployee = {this.deleteEmployee}
          />
        </div>
      </div>
    );
  }  
}

export default App;
