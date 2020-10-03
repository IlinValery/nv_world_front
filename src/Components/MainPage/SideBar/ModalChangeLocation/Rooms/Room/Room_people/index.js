import React from 'react';
import './style.css'
import {connect} from "react-redux";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';



const people_list = [
    {
        user_id: "1",
        name: "Olya"
    },
    {
        user_id: "2",
        name: "Alexey"
    },
    {
        user_id: "3",
        name: "Anya"
    },
]


class RoomPeople extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }

    }

    render() {

        let count = people_list.length;

        return (
            <div>
                <Container fluid={true}>
                    <h4>
                        There are {count} people in the room:
                    </h4>
                    <ul>
                        {people_list.map((people, index) =>
                            <li key={people.user_id} >{people.name}</li>
                        )}
                    </ul>
                </Container>
            </div>
        );
    }
}

export default connect(
    state => ({}),
    dispatch => ({})
)(RoomPeople);