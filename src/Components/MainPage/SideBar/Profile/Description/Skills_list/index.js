import React from 'react';
import './style.css'
import {connect} from "react-redux";
import Skill from "./Skill"

class SkillList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    renderSkillList(array) {
        const objectsItems = [];
        let is_first = true;
        let max_value = 0;
        for (let i = 0; i < array.length; i++) {
            if (is_first) {
                max_value = array[i].score;
                is_first = false;
            }
            objectsItems.push(<Skill key={i} name={array[i].skill_info.title}
                                     value={parseInt(array[i].score / max_value * 100)} real_value={array[i].score}/>);
        }
        return objectsItems;
    }

    render() {
        const skills = this.props.skills;
        return (
            <div>
                {skills.length === 0 ? <></> :
                    <div>
                        <hr/>
                        <h6>My skills:</h6>
                        {this.renderSkillList(skills)}
                        <hr/>
                    </div>}
            </div>
        );
    }
}

export default connect(
    state => ({}),
    dispatch => ({})
)(SkillList);