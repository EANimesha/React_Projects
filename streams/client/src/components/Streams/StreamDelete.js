import React from 'react'
import Modal from '../Modal'

import history from '../../history';

import {fetchStream} from '../../actions';
import {connect} from 'react-redux';

class StreamDelete extends React.Component{
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)   
    }
    renderActions(){
        return(
        <React.Fragment>
            <button className="ui primary button">Delete</button>
            <button className="ui button">Cancel</button>
        </React.Fragment>
    );
    }

    renderContent(){
        if(!this.props.stream){
            return <div>Are you sure you want to delete the stream?</div>
        }
        return <div>Are you sure you want to delete the stream with title: ${this.props.stream.title}?</div>
    }
    render(){
        return(
            <Modal
                title="Delete stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={()=>history.push('/')}
            />
        )
    }
    
}

const mapStateToProps=(state,ownProps)=>{
    return {stream:state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream})(StreamDelete)