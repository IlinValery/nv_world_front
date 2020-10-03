import React, { Component } from 'react';
import s from './style.module.css'
import Photo from "./Photo"
import Name from "./Name"
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
                    <Col xl={"7"}>
                        <div className={s.whole_page}>
                            {/*{this.props.children}*/}
                            <Photo image={this.props.image}/>
                        </div>
                    </Col>
                    <Col xl={"5"}>
                        <p>social networks</p>
                    </Col>
                </Row>
                <Name name={this.props.name}
                    position={this.props.position}
                    open={this.props.open}/>

            </Container>
        );
    }
}