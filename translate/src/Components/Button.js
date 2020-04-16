import React, { Component } from 'react';
import LanguageContext from '../contexts/languageContext'

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

  render(){
    return(
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {(value)=>this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    )
  }
}

export default Button;
