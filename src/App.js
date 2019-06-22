import React from 'react';
import Employees from './components/Employees';

class App extends React.Component {
  state = {
    employees: [
      {
        id: 1,
        firstName: 'Sarah',
        lastName: 'VanDuine', 
        numOfDependants: 2,
        payCheck: 2000
      },
      {
        id: 2,
        firstName: 'James',
        lastName: 'Jamison', 
        numOfDependants: 4,
        payCheck: 2000
      },
      {
        id: 3,
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

  }

  render()
  {
    console.log(this.state.employees);
    return (
      <div className="App">
        <Employees 
          employees = {this.state.employees}
          selectEmployee = {this.selectEmployee}
          deleteEmployee = {this.deleteEmployee}
        />
      </div>
    );
  }  
}

export default App;
