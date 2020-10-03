import React from 'react';
import './style.css'
import {connect} from "react-redux";
import Skill from "./Skill"

class SkillList extends React.Component {

    constructor(props){
        super(props);

        this.state={

        }
    }


    render() {

        return (
            <div >
                <br/>
               TODO Skills
                <br/>
            </div>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({

    })
)(SkillList);