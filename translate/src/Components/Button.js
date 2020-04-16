import React, { Component } from 'react';
import LanguageContext from '../contexts/languageContext'
import ColourContext from '../contexts/ColorContext';

class Button extends Component {
//method 1 - with this.context

  //   static contextType=LanguageContext;
  // render() {
  //       const text=this.context==='english'?'Submit':'Voorleggen';
  //     return <button className="ui button primary">{text}</button>
  // }

//method 2- with consumer

  renderSubmit(value){
    return value==='english'?'Submit':'Voorleggen';
  }

  renderButton(color){
    return(
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value)=>this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    )
  }
  render(){
    return(
      <ColourContext.Consumer>
      {(color)=>this.renderButton(color)}
      </ColourContext.Consumer>
    )
  }
}

export default Button;
