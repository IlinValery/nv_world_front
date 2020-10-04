import React, { Component } from 'react';
import s from './style.module.css'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class Name extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }



    render() {
        const user = this.props.user;
        return (
            <Container fluid={false}>
                <hr/>
                <Row>
                    <Col style={{textAlign: "center"}}>
                        <h3>{user.name}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign: "center"}}>
                        <h5>{user.position}</h5>
                    </Col>
                </Row>

                <Row>
                    <Form className={s.form_open_projects}>
                        <FormGroup>
                            <Label check>
                                <Input type="checkbox" defaultChecked={user.isOpenToProjects} />{user.open}
                                Open to new projects
                            </Label>
                        </FormGroup>
                    </Form>

                </Row>
                <hr/>
            </Container>
        );
    }
}