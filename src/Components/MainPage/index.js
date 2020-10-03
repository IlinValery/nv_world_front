import React from 'react';
import './style.css'
import {connect} from "react-redux";
import SideBar from "./SideBar";
import Location from "./Location";


class MainPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }


    render() {
        return (
            <div>
                <SideBar/>
                <Location/>
            </div>
        );
    }
}

export default connect(
    state => ({}),
    dispatch => ({})
)(MainPage);