import React from 'react';
import './style.css'
import {connect} from "react-redux";
import {Button, Col, Container, Form, FormGroup, Input, Label, Row, FormFeedback} from "reactstrap";
import {getCookie} from "../../utils";


class AuthPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            realname: "",
            password: "",
            dataChanged: false,
            isError: false,
            passwordValidated: false,
            is_male: true
        }
        this.passwordChange = this.passwordChange.bind(this);
        this.fieldChange = this.fieldChange.bind(this);

    }

    setFieldsToState(e) {
        this.setState({
            [e.target.name]: e.target.value,
            dataChanged: true,
            isError: false
        });
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(100);
            }, 200)
        });
    }

    fieldChange(value) {
        this.setFieldsToState(value);
    }

    passwordChange(value) {
        this.setFieldsToState(value).then(() => {
            if (this.state.password.length >= 8) {
                this.setState({passwordValidated: true})
            } else {
                this.setState({passwordValidated: false})
            }
        })
    }

    setIsMale(value) {
        this.setState({is_male: value})
    }


    formSubmit() {
        fetch('/api/auth/login/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify({
                'username': this.state.username,
                'password': this.state.password,
                'realname': this.state.realname,
                'is_male': this.state.is_male
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
                if (data.token) {
                    localStorage.setItem('usertoken', data.token);
                    window.location.reload();
                }
                if (data.error) {
                    this.setState({
                        errorCode: data.error.code
                    });
                    console.log(this.state.errorCode)
                }
            })
            .catch((err) => {
                console.log('Fetch Error:', err);
            });

    }

    render() {
        console.log(this.state)
        return (
            <div className={"auth-page-container"}>
                <Container>
                    <Row>
                        <Col/>
                        <Col md={6}>
                            <div className={"auth-form"}>
                                <h1 className="text-center">
                                    <span role={"img"} aria-label={"build"}>🏢</span> &nbsp;
                                    NV WORLD! &nbsp;
                                    <span role={"img"} aria-label={"pc"}>💻</span>
                                </h1>
                                <Form>
                                    <FormGroup>
                                        <Label for="username_field">username</Label>
                                        <Input type="text" name="username" id="username_field"
                                               onChange={this.fieldChange}
                                               placeholder="type your username here"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="realname_field">real name</Label>
                                        <Input type="text" name="realname" id="realname_field"
                                               onChange={this.fieldChange}
                                               placeholder="type your real name here"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password_field">password</Label>
                                        <Input type="password" name="password" id="password_field"
                                               onChange={this.passwordChange}
                                               {...(this.state.passwordValidated ? {valid: true} : {invalid: true})}
                                               placeholder="type your password here"/>
                                        <FormFeedback>min 8 symbols on password</FormFeedback>
                                    </FormGroup>
                                    <FormGroup tag="fieldset" row>
                                        <legend className="col-form-label col-sm-4">gender</legend>
                                        <Col sm={10}>
                                            <Row form>
                                                <Col sm={6}>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input type="radio" name="radio_male" onClick={() => {
                                                                this.setIsMale(true)
                                                            }}/>{' '}
                                                            male
                                                        </Label>
                                                    </FormGroup>
                                                </Col>
                                                <Col sm={6}>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input type="radio" name="radio_male" onClick={() => {
                                                                this.setIsMale(false)
                                                            }}/>{' '}
                                                            female
                                                        </Label>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </FormGroup>

                                </Form>
                                <Button size={"lg"}
                                        {...(this.state.username.length !== 0 && this.state.passwordValidated && this.state.realname.length !== 0) ? {
                                            disabled: false,
                                            outline: false,
                                            color: 'success'
                                        } : {disabled: true, outline: true, color: 'primary'}}
                                        onClick={() => {
                                            this.formSubmit()
                                        }}
                                        block>
                                    START GAME!
                                </Button>
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
    state => ({}),
    dispatch => ({})
)(AuthPage);