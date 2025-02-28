import React, { Component } from 'react'
import SearchBar from './SearchBar';
import youTube from '../apis/youTube';
import VideoList from './VideoList';
import { VideoDetail } from './VideoDetail';

export class App extends Component {
    state={videos:[],selectedVideo:null}

    componentDidMount(){
        this.onTermSubmit('buildings')
    }

    onTermSubmit=async term=>{
        // console.log(term)
        const response=await youTube.get('/search',{
            params:{
                q:term,
                part:'snippet',
                maxResults:5,
                key:'AIzaSyAmX3AagwfW1EkQSZU_wuq9ZDPMkokRPD4'
            }
        });

        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        });
    }

    onVideoSelect=(video)=>{
        this.setState({selectedVideo:video})
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList 
                            videos={this.state.videos} 
                            onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
