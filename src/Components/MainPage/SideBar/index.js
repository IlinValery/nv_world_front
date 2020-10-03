import React from 'react';
import './style.css'
import {connect} from "react-redux";
import ModalChangeLocation from "./ModalChangeLocation";
import ModalInfo from "./ModalInfo";
import ModalSearch from "./ModalSearch";
import Profile from "./Profile";
import Skills from "./Profile/"

import {users} from "./users"


import HorizontalDivider from "./Components/divider";


class SideBar extends React.Component {

    constructor(props){
        super(props);

        this.state={

        }
    }


    render() {

        return (
            <div className={"sidebar-container"}>
                person card as component here, on did mount - > apply personal informatio. Now - just static
                <br/><br/>
                <HorizontalDivider/>
                Tasks here<br/><br/>
                <HorizontalDivider/>
                <Profile user={users[0]}/>

                {/*person card as component here, on did mount - > apply personal information. Now - just static*/}
                {/*<br/><br/>*/}
                {/*TODO divider<br/><br/>*/}
                {/*Tasks here<br/><br/>*/}
                {/*TODO divider<br/><br/>*/}





                <ModalInfo/>
                <ModalChangeLocation/>
                <ModalSearch/>
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