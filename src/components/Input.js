import React, { Component } from 'react';

export default class Input extends Component {
    state = { 
        value: ""
    } 
    
    changeValue = (value) => {
         this.setState({value})
    }

    checkForm = (type, value) => {

        const {updateIsFilled} = this.props;

        if (type === 'text') {
            if (/^[A-Za-z_]/.test(value)) {
                updateIsFilled(type)
            }
            else
                updateIsFilled(type, false)
        }

        if (type === 'password') {
            if (value.length >= 5) {
                updateIsFilled(type)
            }
            else
                updateIsFilled(type, false)
        }

        if (type === 'number') {
            if (value.length > 0) {
                updateIsFilled(type)
            }
            else
                updateIsFilled(type, false)
        }

        if (type === 'radio') {
            if (value === 'mężczyzna' || value === 'kobieta' || value === 'ślimak')
                updateIsFilled(type)
            else
                updateIsFilled(type, false)
        }
    }

  render() {

        const { type, placeholder, isSubmitEnabled } = this.props;   // const type = this.props.type
        const { value } = this.state;

    switch (type){
        case "text":
        case "password":
        case "number":
            return(
                <input 
                    type={type} 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={(e)=>this.changeValue(e.target.value)} 
                    onBlur={(e)=>this.checkForm(type, e.target.value)}/> 
            );
        case "radio":
            return(
                <div>
                    <input 
                        type={type} 
                        value={this.props.value} 
                        name="gender" 
                        onChange={(e)=>this.changeValue(e.target.value)} 
                        onBlur={(e)=>this.checkForm(type, e.target.value)}/> 
                    {this.props.value}
                </div>
            );
        case "submit":
        return(
            <div>
                <input 
                    type={type}
                    className={isSubmitEnabled ? 'active' : 'inactive'}
                    />
            </div>
        );
        default:
            return(
                <p>KSP</p>
            )
    }
  }
}
