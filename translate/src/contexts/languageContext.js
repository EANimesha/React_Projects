import React from 'react';

const Context= React.createContext();

export class LanguageStore extends React.Component{
    state={language:'english'};

    onLanguageChange =(language)=>{
        this.setState({language})
    }

    render(){
        return(
            <Context.Provider value={{...this.state, onLanguageChange}}>
                {this.props.children}
            </Context.Provider>
        )
    }

}
