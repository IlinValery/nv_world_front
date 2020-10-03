import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import Footer from "./Components/Footer";

import {library} from '@fortawesome/fontawesome-svg-core'
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

library.add(faCheck, faTimes)

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state={
        }
    }

    render() {
        return (
            <div className={"app-container"}>
                <Container>
                    <Row>
                        <Col/>
                        <Col>
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


                <Footer/>
            </div>
        );
    }
}

export default connect(
    state => ({
        chosenLabel: state.label,
        labelingStatus: state.labelingStatus,
        existingMasks: state.masks,
        tempMask: state.tempMask,
        image: state.image,
        savingStatus: state.savingStatus
    }),
    dispatch => ({

    })
)(App);
