import React from 'react';
import PropTypes from 'prop-types';

class Dependants extends React.Component { 
    state = {
        name: "",
        currentId: -1
    }

    onChange = (e) => {
        if(e.target.id === this.state.currentId && this.state.currentId !== -1)
        {
            this.setState({
            name: [e.target.value]
            })
        }
        else
        {
            this.props.addDependant(this.name);
            this.setState({
                currentId: e.target.id
            })
        }
    }

    render()
    {
        const numOfDependants = this.props.numOfDependants
        let dependantList = []
        for (let i = 1; i <= numOfDependants; i++) {
            dependantList.push(
                 <label > {"Dependant "+i}: 
                 <input key={i} type="text" id={i} onInput={this.onChange}
                 />
                 </label>
            )
          }

        return(
            <div>
                {dependantList}
            </div>
        )
    }  
}

//PropTypes
Dependants.propTypes = {
    addDependant: PropTypes.func.isRequired
}

export default Dependants;