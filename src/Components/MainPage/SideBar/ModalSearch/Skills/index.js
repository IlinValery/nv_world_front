import React from 'react';
import './style.css'
import {connect} from "react-redux";
import { Button, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Skill from "./Skill";

class Skills extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
        this.inputChange = this.inputChange.bind(this);
    }

    findSkill = () => {
        console.log('findSkill', this.state.value);
        this.props.onFindSkill(this.state.value);
    }

    setFieldsToState(e){
        this.setState({
            value: e.target.value,
        });
        return new Promise(function(resolve, reject) {
            setTimeout(function(){
                resolve(100);
            }, 200)
        });
    }

    inputChange(value){
        this.setFieldsToState(value).then(()=>{
            this.findSkill();
        })
    }

    render() {
        let searchInput = '';

        console.log("value from field", this.state.value);

        return (
            <div className="skills_search">
                <Form>
                    <FormGroup row>
                        <Input type="text" ref={(input) => { searchInput = input}} onChange={this.inputChange}/>
                    </FormGroup>
                </Form>

                <ul className="hr">
                    {/*TODO check the errors with this list*/}
                    {this.props.skills.map((skill, index) =>
                        <li key={index}>
                            <Skill skill={skill.title}/>
                        </li>
                    )}

                    {/*{skills_local.map((skill, index) =>*/}
                    {/*    <li key={index} >*/}
                    {/*        <Skill>{skill}</Skill>*/}
                    {/*    </li>*/}
                    {/*)}*/}


                </ul>

                <hr/>
            </div>
        );
    }
}

export default connect(
    state => ({
        skills: state.skills.filter(skill => skill.title.includes(state.filterSkills)),
    }),
    dispatch => ({
        onFindSkill: (skill) => {
            // console.log('name', name);
            dispatch({ type: 'FIND_SKILL', payload: skill.title});
        },
    })
)(Skills);