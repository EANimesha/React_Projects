import React, { Component } from 'react';
import {connect} from 'react-redux'
import {signIn,signOut} from '../actions'

class GoogleAuth extends Component {
    
    //initialize library
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'847313855872-35k5gud4qtnc8q8rdvqf2fvs5djh1om6.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance();
                // this.setState({
                //     isSignedIn:this.auth.isSignedIn.get()
                // });
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        });

    }

    onAuthChange=(isSignedIn)=>{
        // this.setState({isSignedIn:this.auth.isSignedIn.get()})
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        }else{
            this.props.signOut()
        }
    }

    onSignInClick=()=>{
        this.auth.signIn();
    }

    onSignOutClick=()=>{
        this.auth.signOut();
    }

    renderAuthButton(){
        if(this.props.isSignedIn==null){
            return null
        }else if(this.props.isSignedIn===true){
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                <i className="google icon"/>
                Sign Out
                </button>
            )
        }else{
            return (
                <button className="ui red google button" onClick={this.onSignInClick}>
                <i className="google icon"/>
                Sign In with Google
                </button>
            )
        }
    }
  render() {
    return (
      <div> {this.renderAuthButton()} </div>
    );
  }
}

const mapStateToProps=(state)=>{
    return {isSignedIn:state.auth.isSignedIn}
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);
