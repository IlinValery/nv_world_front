import React from 'react';
import './style.css'
import {connect} from "react-redux";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Skills from "./Skills";


class ModalSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            is_open: false,
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({is_open: !this.state.is_open});
    }

    render() {
        return (
            <div style={{marginBottom: "10px"}}>
                <Button color="primary" onClick={this.toggleModal}>Search person</Button>
                <Modal isOpen={this.state.is_open} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Choose necessary skills</ModalHeader>
                    <ModalBody>
                        <Container fluid={true} className="modal_search">
                            <Skills/>
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
)(ModalSearch);