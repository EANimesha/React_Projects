import React from 'react'
import {Router,Route} from 'react-router-dom';
import StreamCreate from './Streams/StreamCreate'
import StreamEdit from './Streams/StreamEdit'
import StreamDelete from './Streams/StreamDelete'
import StreamList from './Streams/StreamList'
import StreamShow from './Streams/StreamShow'
import Header from './header'
import history from '../history'

const App=()=> {
    return (
        <div className="ui container">
            
            <Router history={history}>
                <div>
                    <Header/>
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/streams/show" component={StreamShow}/>
                    <Route path="/streams/create" component={StreamCreate}/>
                    <Route path="/streams/edit/:id" component={StreamEdit}/>
                    <Route path="/streams/delete/:id" component={StreamDelete}/>
                </div>
            </Router>
        </div>
    )
}

export default App
