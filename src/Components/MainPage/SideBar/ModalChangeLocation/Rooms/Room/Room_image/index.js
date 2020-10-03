import React from 'react';
import s from './style.css'
import {connect} from "react-redux";
import { Button, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Image from "./data/office.svg"


const RoomImage = ({room}) => {
    return (
        <>
            <Container fluid={true}>
                <h4 style={{textAlign: "center"}}>
                    {room.name}
                </h4>
                <Row className={"image_block"}>
                    <img src={Image} className={"image_room"}/>
                </Row>
                <Row>
                    <Button color="success" className={"btn_room"}>Enter</Button>{' '}
                </Row>
            </Container>
        </>
    );
}

export default RoomImage;
