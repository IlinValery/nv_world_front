import React from 'react';
import './style.css'
import {connect} from "react-redux";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import Rooms from "./Rooms"

class ModalChangeLocation extends React.Component {

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
                <Button color="primary" onClick={this.toggleModal}>Change location</Button>
                <Modal isOpen={this.state.is_open} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Choose a new location</ModalHeader>
                    <ModalBody>
                        {/*TODO make map of location*/}

                            <Rooms/>

                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default connect(
    state => ({}),
    dispatch => ({})
)(ModalChangeLocation);