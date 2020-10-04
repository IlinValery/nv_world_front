import React from 'react';
import './style.css'
import {connect} from "react-redux";
import ModalChangeLocation from "./ModalChangeLocation";
import ModalInfo from "./ModalInfo";
import ModalSearch from "./ModalSearch";
import Profile from "./Profile";
import Skills from "./Profile/"
import ModalPerson from "./ModalPersonEdit";

// import {users} from "./users"


import HorizontalDivider from "./Components/divider";
import FakeTasks from "./FakeTasks";


class SideBar extends React.Component {

    constructor(props){
        super(props);
        this.state={
        }
    }

    render() {

        return (
            <div className={"sidebar-container"}>
                <Profile user_id={-1}/>

                <h6>Demo personal skill tasks</h6>
                <FakeTasks/>
                <hr/>

                <div className="block_modals">
                    <ModalInfo className="modals_margin_bottom"/>
                    <ModalChangeLocation className="modals_margin_bottom"/>
                    <ModalSearch className="modals_margin_bottom"/>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({

    })
)(SideBar);