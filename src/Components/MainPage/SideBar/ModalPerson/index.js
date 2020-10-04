import React from 'react';
import './style.css'
import {connect} from "react-redux";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, Container, UncontrolledAlert, Input} from "reactstrap";
import {Form, FormGroup, FormFeedback, Jumbotron, Alert, Label} from "reactstrap"
import image from "./data/edit.svg"
import {getCookie} from "../../../utils";

class ModalPerson extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            report: "",
            errorCode: 0,
            dataChanged: false,
            emailValidated: false,
            passwordValidated: false,
            isError: false,
            is_open: false,
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }



    toggleModal() {
        this.setState({is_open: !this.state.is_open});
    }

    setFieldsToState(e){
        this.setState({
            [e.target.name]: e.target.value,
            dataChanged: true,
            isError: false
        });
        return new Promise(function(resolve, reject) {
            setTimeout(function(){
                resolve(100);
            }, 200)
        });
    }

    emailChange(value){
        this.setFieldsToState(value).then(()=>{
            if (this.state.email !== "") {
                this.setState({emailValidated: this.validateEmail(this.state.email)})
            }
        })
    }

    validateEmail(email) {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    passwordChange(value){
        this.setFieldsToState(value).then(()=>{
            if (this.state.password.length >= 8) {
                this.setState({passwordValidated: true})
            } else {
                this.setState({passwordValidated: false})
            }
        })
    }

    reportChange(value){
        this.setFieldsToState(value).then(()=>{
            this.setState({report: value})
        })
    }

//todo: check the form submition form
    formSubmitEmail(){
        fetch('/api/edit/email/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify({'email':this.state.email})
        })
            .then( (response) => {
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
                if (data.error){
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

    formSubmitPassword(){
        fetch('/api/edit/password/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify({'password':this.state.password})
        })
            .then( (response) => {
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
                if (data.error){
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

    formSubmitReport(){
        fetch('/api/submit/report/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify({'report':this.state.report})
        })
            .then( (response) => {
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
                if (data.error){
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
        return (
            <div >
                <Button onClick={this.toggleModal} className={"btn_edit"}>
                    <img src={image} className="image_profile_edit" alt=""/>
                </Button>
                <Modal isOpen={this.state.is_open} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Choose an action</ModalHeader>
                    <ModalBody>


                        <Container>
                            <Row>
                                <Col>
                                    <Form
                                        onKeyPress={e => {if (e.key === 'Enter') {
                                            if (this.state.emailValidated ) {
                                                this.formSubmitEmail()
                                            }
                                        }}}>
                                        <h5 className={"text-center"}>Change email</h5>
                                        <FormGroup>
                                            <Label for="fieldEmail">Email</Label>
                                            <Input type="email"
                                                   name="email"
                                                   id="fieldEmail"
                                                   {...(this.state.email === "")? {invalid: false, valid: false}: (this.state.emailValidated) ? {invalid: false, valid: true}: {invalid: true, valid: false} }
                                                   onChange={this.emailChange}
                                                   placeholder="Enter your email" />
                                            <FormFeedback invalid={1}>Email in invalid format</FormFeedback>

                                        </FormGroup>

                                        <Row>
                                            <Col/>
                                            <Col>
                                                <Button block
                                                        {...(this.state.emailValidated  && !this.state.isError) ? {disabled: false, outline: false, color: 'primary'}: {disabled: true, outline: true, color: 'secondary'}}
                                                        onClick={()=>{this.formSubmitEmail()}}>Save</Button>
                                            </Col>
                                            <Col/>
                                        </Row>
                                        {this.state.isError? (
                                            <div>
                                                <br/>
                                                <Alert color="danger" className="text-center">
                                                    Wrong email
                                                </Alert>
                                            </div>
                                        ):(<></>)}


                                    </Form>
                                </Col>
                                <Col>

                                    <Form
                                        onKeyPress={e => {if (e.key === 'Enter') {
                                            if (this.state.passwordValidated) {
                                                this.formSubmitPassword()
                                            }
                                        }}}>
                                        <h5 className={"text-center"}>Change password</h5>

                                        <FormGroup>
                                            <Label for="fieldPassword">Password</Label>
                                            <Input type="password"
                                                   name="password"
                                                   id="fieldPassword"
                                                   {...(this.state.password === "")? {invalid: false, valid: false}: (this.state.passwordValidated) ? {invalid: false, valid: true}: {invalid: true, valid: false} }
                                                   onChange={this.passwordChange}
                                                   placeholder="Enter your password" />
                                            <FormFeedback invalid={1}>Password should be more then 8
                                                characters</FormFeedback>
                                        </FormGroup>
                                        <Row>
                                            <Col/>
                                            <Col>
                                                <Button block
                                                        {...(this.state.passwordValidated && !this.state.isError) ? {disabled: false, outline: false, color: 'primary'}: {disabled: true, outline: true, color: 'secondary'}}
                                                        onClick={()=>{this.formSubmitPassword()}}>Save</Button>
                                            </Col>
                                            <Col/>
                                        </Row>
                                        {this.state.isError? (
                                            <div>
                                                <br/>
                                                <Alert color="danger" className="text-center">
                                                    Wrong password
                                                </Alert>
                                            </div>
                                        ):(<></>)}


                                    </Form>
                                </Col>
                            </Row>

                            <Row style={{marginBottom: "30px", textAlign: "center"}}>
                                <Form style={{margin: "auto"}}
                                    onKeyPress={e => {if (e.key === 'Enter') {
                                            this.formSubmitReport()
                                        }
                                    }}>
                                    <h5>Make a report</h5>
                                    <FormGroup>
                                        <Label for="fieldReport">Report</Label>
                                        <Input type="textarea"
                                               name="report"
                                               id="fieldReport"
                                               onChange={this.reportChange}
                                               placeholder="Enter your report" />
                                        {/*<FormFeedback invalid={1}>Email in invalid format</FormFeedback>*/}

                                    </FormGroup>

                                    <Row>
                                        <Col/>
                                        <Col>
                                            <Button block onClick={()=>{this.formSubmitReport()}}>Submit</Button>
                                        </Col>
                                        <Col/>
                                    </Row>
                                    {this.state.isError? (
                                        <div>
                                            <br/>
                                            <Alert color="danger" className="text-center">
                                                Wrong email
                                            </Alert>
                                        </div>
                                    ):(<></>)}


                                </Form>
                            </Row>


                        </Container>


                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default connect(
    state => ({}),
    dispatch => ({})
)(ModalPerson);