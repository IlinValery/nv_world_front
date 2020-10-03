import React from 'react';
import './style.css'
import {connect} from "react-redux";


class Location extends React.Component {

    constructor(props){
        super(props);

        this.state={

        }
    }


    render() {
        return (
            <div className={"location-container"}>

            </div>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({

    })
)(Location);