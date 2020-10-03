import React from 'react';
import './style.css'
import {connect} from "react-redux";
import { Button, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Skill from "./Skill";

const skills_local = [
    {
        name: "Middle C++",
        id: 1
    },
    {
        name: "Deep Learning",
        id: 2
    },
    {
        name: "BackEnd",
        id: 3
    },
    {
        name: "FrontEnd",
        id: 4
    },
    {
        name: "BugFixer",
        id: 5
    }
]




class Skills extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    findSkill = () => {
        console.log('findSkill', this.state.value);
        this.props.onFindSkill(this.state.value);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        let searchInput = '';



        return (
            <div className="skills_search">
                <Form>
                    <FormGroup row>
                        <Input type="text" ref={(input) => { searchInput = input}} onChange={this.handleChange}/>
                    </FormGroup>
                </Form>

                <ul className="hr">
                    {/*TODO check the errors with this list*/}
                    {/*{this.props.skills.map((skill, index) =>*/}
                    {/*    <li key={index}>*/}
                    {/*        <Skill skill={skill}/>*/}
                    {/*    </li>*/}
                    {/*)}*/}
                    {/*]*/}

                    {skills_local.map((skill, index) =>
                        <li key={index} >
                            <Skill>{skill}</Skill>
                        </li>
                    )}


                </ul>

                <hr/>
            </div>
        );
    }
}

export default connect(
    state => ({
        // skills: state.skills.filter(skill => skill.name.includes(state.filterSkills)),

    }),
    dispatch => ({
        onFindSkill: (name) => {
            // console.log('name', name);
            dispatch({ type: 'FIND_SKILL', payload: name});
        },
    })
)(Skills);