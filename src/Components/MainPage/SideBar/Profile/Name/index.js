import React, {Component} from 'react';

import {Container, Row, Col} from 'reactstrap';
import ModalPersonEdit from "../../ModalPersonEdit";

export default class Name extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    dict_roles = {
        "PM": "Project manager",
        "AL": "Analyst",
        "LA": "Lead Analyst",
        "AT": "Architect",
        "TL": "Team lead",
        "DV": "Developer",
        "QA": "Quality Assurance",
        "SA": "System Administrator"
    }

    render() {
        const user = this.props.user;
        const position = this.props.position[0];
        return (
            <Container fluid={false}>

                <Row>
                    <Col style={{textAlign: "center"}}>
                        <h3>{user.name}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign: "center"}}>
                        <h5>{this.dict_roles ? this.dict_roles[position.role] : ""} <br/>in <b>{position.project_info.name}</b> project</h5>
                    </Col>
                </Row>

                <ModalPersonEdit/>

            </Container>
        );
    }
}