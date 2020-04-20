import React, { Component } from 'react';

class LanguageSelector extends Component {
  render() {
    return (
      <div>
           <div>
         Select A language:
         <i className="flag us" onClick={()=>this.props.onLanguageChange('english')}></i>
         <i className="flag nl" onClick={()=>this.props.onLanguageChange('dutch')}></i>
       </div>
      </div>
    );
  }
}

export default LanguageSelector;
