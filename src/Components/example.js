import React from 'react';
import './style.css'
import {connect} from "react-redux";


class Example extends React.Component {

    constructor(props){
        super(props);

        this.state={

        }
    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({

    })
)(Example);