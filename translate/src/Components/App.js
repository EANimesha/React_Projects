import React from 'react';
import UserCreate from './UserCreate';

import LanguageContext from '../contexts/languageContext'
import ColourContext from '../contexts/ColorContext';
import  LanguageSelector from '../Components/LanguageSelector';

class App extends React.Component {
  state={
    language:'english'
  }
  onLanguageChange=(language)=>{
    this.setState({language})
  }
  render(){
    return (
      <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange}/>

       <ColourContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
              <UserCreate/>
          </LanguageContext.Provider>
       </ColourContext.Provider>
      </div>
    );
  }
}

export default App;
