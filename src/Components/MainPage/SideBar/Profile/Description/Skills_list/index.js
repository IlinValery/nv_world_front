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
        const skills = this.props.skills;
        const skills_value_local = [
            {value: 45}, {value: 20}, {value: 90}];
        return (
            <div >
                <br/>
                   <Skill skills={skills_value_local[0]}/>
                   <Skill skills={skills_value_local[1]}/>
                   <Skill skills={skills_value_local[2]}/>
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