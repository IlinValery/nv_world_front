import React from 'react';
import s from './style.css'
import {connect} from "react-redux";
import { Button, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import RoomImage from "./Room_image";
import RoomPeople from "./Room_people";

const Room = ({room}) => {
    // console.log("props", props.room);
    return (
        <>
            <Container fluid={true} className={"room_row"}>
                <Row>
                    <Col xl={6}>
                        <RoomImage room={room}/>
                    </Col>
                    <Col xl={6}>
                        <RoomPeople/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Room;
