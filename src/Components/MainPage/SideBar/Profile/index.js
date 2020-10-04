import React, { Component } from 'react';
import s from './style.module.css'
import Photo from "./Photo"
import Name from "./Name"
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import SkillList from "./Description/Skills_list"
import ModalPerson from "../ModalPerson";

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const user = this.props.user
        return (
            <Container fluid={true}>
                <Row>
                    <Col xl={1}>
                        <ModalPerson/>
                    </Col>
                    <Col>
                        <div className={s.whole_page}>
                            {/*{this.props.children}*/}
                            <Photo/>
                        </div>
                    </Col>
                </Row>
                <Name user={user}/>
                <SkillList skills={user.skills}/>

            </Container>
        );
    }
}