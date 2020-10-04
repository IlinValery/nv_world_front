import React from 'react';
import './style.css'
import {connect} from "react-redux";
import {Progress, Container, Row, Col} from 'reactstrap';


class Skill extends React.Component {

    constructor(props){
        super(props);

        this.state={

        }
    }


    render() {

        return (
            <div >
                <Container fluid={true}>
                                <Row>
                                    <Col sm={"5"}>
                                        {this.props.name}
                                    </Col>
                                    <Col sm={"7"}>
                                        <Progress value={this.props.value} title={this.props.real_value} />
                                    </Col>
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
)(Skill);