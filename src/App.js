import React from 'react';
import Employees from './components/Employees';
import Header from './components/layout/Header';
import AddEmployee from './components/AddEmployee';
import uuid from 'uuid';

class App extends React.Component {
  state = {
    employees: []
  }

  selectEmployee = (id) => {
    this.setState({ employees: this.state.employees.map(employee => {
      if(employee.id === id){
        console.log("Id " + {id} + " selected")
      }
      return employee
    })
    });
  }

  deleteEmployee = (id) => {
    this.setState({ employees: [...this.state.employees.filter(employee => employee.id !== id)]})
  }

  addEmployee = (firstName, lastName, numOfDependants, numOfDependantsWithANames) => {

    var discount = this.calculate(firstName, numOfDependants, numOfDependantsWithANames);
    const paycheck = 2000;
    const paycheckPerYear = 26;
    const costOfDependant = 500;
    const costOfEmployee = 1000;
    const standardCost = numOfDependants*costOfDependant + costOfEmployee;
    const postDiscount = standardCost - discount;
    const costOfBenefitsPerPaycheck = (postDiscount/paycheckPerYear).toFixed(2);
    const paycheckWithBenefits = paycheck - costOfBenefitsPerPaycheck;

    const newEmployee = {
      id: uuid.v4(),
      firstName,
      lastName,
      numOfDependants,
      standardCost,
      discount,
      postDiscount,
      costOfBenefitsPerPaycheck,
      paycheckWithBenefits
    }
    this.setState({
      employees: [...this.state.employees, newEmployee]
    })
  }

  calculate = (firstName, numOfDependants, numOfDependantsWithANames) => {
    console.log("Calculating discount for " + firstName)
    const costOfBeneifitsPerEmployeePerYear = 1000;
    const costOfBenefitsPerDepedantPerYear = 500;
    const discountPercentage = .1;
    const discountLetter = 'A';
  
    var discount = 0;
    if(firstName.toString().substring(0, 1).toUpperCase() === discountLetter){
      discount += costOfBeneifitsPerEmployeePerYear * discountPercentage;
    }
    if(numOfDependants > 0){
      for(var i = 0; i < numOfDependantsWithANames; i++){
        discount += costOfBenefitsPerDepedantPerYear * discountPercentage
      }
    }
    return discount;
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
