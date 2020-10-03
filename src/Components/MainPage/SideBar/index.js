import React from 'react';
import './style.css'
import {connect} from "react-redux";
import ModalChangeLocation from "./ModalChangeLocation";
import ModalInfo from "./ModalInfo";
import ModalSearch from "./ModalSearch";
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