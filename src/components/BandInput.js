// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  
    state = {
      name: ''
    }
  

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: '',
    });
  }


  render() {
     

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
          <input 
          type="text" 
          placeholder="add band" 
          value={this.state.name}
          onChange={this.handleChange}/> 
          </p>
          <input type="submit" />
        </form>
        {this.state.name}
      </div>
    )
  }
}

export default BandInput
//The form goes here. It should have a text field and a submit button.
