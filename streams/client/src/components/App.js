import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import StreamCreate from './Streams/StreamCreate'
import StreamEdit from './Streams/StreamEdit'
import StreamDelete from './Streams/StreamDelete'
import StreamList from './Streams/StreamList'
import StreamShow from './Streams/StreamShow'
import Header from './header'

const App=()=> {
    return (
        <div className="ui container">
            
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/streams/show" component={StreamShow}/>
                    <Route path="/streams/create" component={StreamCreate}/>
                    <Route path="/streams/edit" component={StreamEdit}/>
                    <Route path="/streams/delete" component={StreamDelete}/>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
