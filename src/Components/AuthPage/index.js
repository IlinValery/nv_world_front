import React from 'react';
import './style.css'
import {connect} from "react-redux";
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";


class AuthPage extends React.Component {

    constructor(props){
        super(props);

        this.state={

        }
    }


    render() {
        return (
            <div className={"auth-page-container"}>
                <Container>
                    <Row>
                        <Col/>
                        <Col md={6}>
                            <div className={"auth-form"}>
                                <h1>NV world</h1>
                                <Form>
                                    <FormGroup>
                                        <Label for="username_field">username</Label>
                                        <Input type="text" name="username" id="username_field" placeholder="type your username here" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="realname_field">real name</Label>
                                        <Input type="text" name="realname" id="realname_field" placeholder="type your real name here" />
                                    </FormGroup>
                                    <Button color={"success"} block>
                                        START GAME!
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                        <Col/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({

    })
)(AuthPage);