import React, { Component } from 'react';
import s from './style.module.css'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col>
                        <h2>{this.props.name}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>{this.props.position}</h5>
                    </Col>
                    <Col>
                        <Form>
                            <FormGroup>
                                <Label check>
                                    <Input type="checkbox" />{this.props.open}
                                    Open to new projects
                                </Label>
                            </FormGroup>
                        </Form>

                    </Col>
                </Row>

            </Container>
        );
    }
}