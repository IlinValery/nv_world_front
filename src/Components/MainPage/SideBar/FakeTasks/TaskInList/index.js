import React from "react";
import './style.css'
import {Badge, ListGroup, ListGroupItem} from "reactstrap";
import {getCookie, getCurrentAuthUser} from "../../../../../utils";

export default class TaskInList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isCompleted: false
        }
    }

    finishTask(){
        let data = getCurrentAuthUser()
        console.log(data);
        fetch('/api/task/complete/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify({
                'user_id': data.user_id,
                'skill_id': this.props.skill.id,
                'amount': this.props.amount,
            })
        })
            .then((response) => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    this.setState({
                        isError: true
                    });
                    return;
                }
                return response.json();
            })
            .then((data) => {

            })
            .catch((err) => {
                console.log('Fetch Error:', err);
            });

        this.setState({isCompleted:true})
    }

    render() {
        // this.props.skill
        // this.props.id, key
        if (!this.state.isCompleted){
            return(<ListGroupItem tag="a" onClick={()=>this.finishTask()} action>Task #{this.props.id}  <Badge pill color="danger">{this.props.skill.title} - {this.props.amount} pts</Badge></ListGroupItem>
            )
        } else return(<></>)
    }
}