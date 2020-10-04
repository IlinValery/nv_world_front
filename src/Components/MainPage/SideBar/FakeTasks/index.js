import React from "react";
import './style.css'
import TaskInList from "./TaskInList";
import {ListGroup, ListGroupItem, Badge} from "reactstrap";
import Skill from "../Profile/Description/Skills_list/Skill";

export default class FakeTasks extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: <></>,
            skills: []
        }
    }


    componentDidMount() {
        fetch('/api/skills/all/')
            .then((response) => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                return response.json();
            })
            .then((data) => {
                this.setState({
                    skills: data.skills,
                    dataLoaded: true
                })
                this.setState({tasks: this.renderTasks(3, data.skills)})
                let interval = setInterval(()=>{

                        this.setState({tasks: <></>});
                        this.setState({tasks: this.renderTasks(3, this.state.skills)});
                }
                    , 5000
                )
            })
            .catch((err) => {
                console.log('Fetch Error:', err);
            });

    }

    randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
    renderTasks(amount, skills) {
        const objectsItems = [];
        for (let i = 0; i < amount; i++) {
            let skill_index = this.randomInteger(0, skills.length-1);
            objectsItems.push(<TaskInList id={i+1} key={"tasks"+this.randomInteger(0, 4000)}
                                          amount={this.randomInteger(2, 7)}
                                          skill={skills[skill_index]}/>)
        }
        return objectsItems;
    }

    render() {
        return (
            <ListGroup>
                {this.state.tasks}
            </ListGroup>
        );
    }
}