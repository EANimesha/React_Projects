import React, { Component } from 'react';

class SearchBar extends Component{
    state={term:''}

    onFormSubmit=event=>{
        event.preventDefault();

        // console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }
    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type='text'
                            value={this.state.term}
                            onChange={e=>this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;