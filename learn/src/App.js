import React from 'react';
// import ReactDOM from 'react-dom'
import './App.css';
import SearchBar from './components/SearchBar';
import unsplash from './api/unsplash';
import ImageList from './components/ImageList';

class App extends React.Component {
  state={images:[]};
  
  onSearchSubmit=async (term)=>{
    // console.log(term);
    const response= await unsplash.get('/search/photos',{
      params:{query:term},
    });
    this.setState({images:response.data.results});
  }
  render(){
    return (
      <div className="ui container" style={{marginTop:'10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
      found: {this.state.images.length} images
      <ImageList images={this.state.images}/>
      </div>
    );
  }
  
}

export default App;
