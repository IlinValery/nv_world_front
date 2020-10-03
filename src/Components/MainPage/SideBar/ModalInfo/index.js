import React from 'react';
import './style.css'
import {connect} from "react-redux";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import Pitch from "./Pitch"

class ModalInfo extends React.Component  {

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
                    <Button color="primary" onClick={this.toggleModal}>System information</Button>
                    <Modal isOpen={this.state.is_open} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>System overview</ModalHeader>
                        <ModalBody>
                            <Pitch/>
                        </ModalBody>
                    </Modal>
                </div>
            )
    }


}

export default ModalInfo