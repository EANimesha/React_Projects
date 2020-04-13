import React from 'react';
import UserCreate from './UserCreate';

class App extends React.Component {
  state={
    language:'english'
  }
  onLanguageChange=(language)=>{
    this.setState({language})
  }
  render(){
    return (
      <div>
       <div>
         Select A language:
         <i className="flag us" onClick={()=>this.onLanguageChange('english')}></i>
         <i className="flag nl" onClick={()=>this.onLanguageChange('dutch')}></i>
       </div>
       <UserCreate/>
      </div>
    );
  }
}

export default App;
