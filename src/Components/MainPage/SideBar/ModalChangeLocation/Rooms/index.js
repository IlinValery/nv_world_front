import React from 'react';
import './style.css'
import {connect} from "react-redux";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Room from "./Room";

const rooms_list = [
    {
        id: 1,
        name: "Kitchen",
        link: "link"
    },
    {
        id: 2,
        name: "Smoke room",
        link: "link"
    }
]


class Rooms extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }

    }

    render() {
        console.log("rooms_length", rooms_list);
        return (
            <div>
                <Container fluid={true}>

                    <ul className="hr">
                        {rooms_list.map((room, index) =>
                            <li key={room.id} >
                                <Row>
                                    <Room room={room}/>
                                </Row>
                            </li>
                        )}
                    </ul>
                    {/*<ul className="hr">*/}

                    {/*    <li >*/}
                    {/*        <Room room={"Smoke room"}/>*/}
                    {/*    </li>*/}
                    {/*    <li >*/}
                    {/*        <Room room={"Kitchen"}/>*/}
                    {/*    </li>*/}

                    {/*</ul>*/}
                </Container>
            </div>
        );
    }
}

export default connect(
    state => ({}),
    dispatch => ({})
)(Rooms);