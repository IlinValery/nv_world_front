import React from 'react';
import './style.css'
import {connect} from "react-redux";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";


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
            <div>
                <Button color="primary" onClick={this.toggleModal}>Search person</Button>
                <Modal isOpen={this.state.is_open} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Insert filters</ModalHeader>
                    <ModalBody>
                        TODO make filters here
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