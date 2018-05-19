import React, { Component } from 'react';
import Input from './Input';

export default class Form extends Component {

  state = {
    isFilled: {
      text: false,
      password: false,
      radio: false,
      number: false
    },
    isSubmitEnabled: false
  }

  updateIsFilled = (type, bValue=true) => 
  {
    this.setState(
    {
      isFilled: 
      {
        ...this.state.isFilled,
       [type]: bValue
      }
    }, () => 
      {
        this.validateForm()
      })
  }

  validateForm = () => {
    const {text, password, radio, number} = this.state.isFilled
    
    if (text && password && radio && number)
    {
      this.setState( {isSubmitEnabled: true} )
    }
    else
      this.setState( {isSubmitEnabled: false} )
  }
  

  render() {
    return (
      <form style={{display: "flex", flexDirection: "column"}}>
          <Input type="text" placeholder="wpisz imię" updateIsFilled={this.updateIsFilled}/>
          {/* type - tu można dać własną nazwę, dopiero binding ma znaczenie */}
          <Input type="password" placeholder="wpisz hasło" updateIsFilled={this.updateIsFilled}/>
          <Input type="number" placeholder="wpisz wiek" updateIsFilled={this.updateIsFilled}/>
          <Input type="radio" value="mężczyzna" updateIsFilled={this.updateIsFilled}/>
          <Input type="radio" value="kobieta" updateIsFilled={this.updateIsFilled}/>
          <Input type="radio" value="ślimak" updateIsFilled={this.updateIsFilled}/>
          <Input type="submit" isSubmitEnabled={this.state.isSubmitEnabled}/>
      </form>
    );
  }
}
