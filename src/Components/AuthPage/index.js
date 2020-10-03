import React from 'react';
import './style.css'
import {connect} from "react-redux";


class AuthPage extends React.Component {

    constructor(props){
        super(props);

        this.state={

        }
    }


    render() {
        return (
            <div className={"auth-page-container"}>
                
            </div>
        );
    }
}

export default connect(
    state => ({
        image: state.image,
    }),
    dispatch => ({

    })
)(AuthPage);