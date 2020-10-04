import React, {Component} from 'react';
import s from './style.css'
import Photo from "./Photo"
import Name from "./Name"
import {Container, Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import SkillList from "./Description/Skills_list"
import jwt_decode from "jwt-decode";
import {getCurrentAuthUser} from "../../../../utils";
import ModalPerson from "../ModalPerson";

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataLoaded: false
        };
    }

    loadProfileData(id) {
        fetch('/api/user/'+id)
            .then( (response) => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                return response.json();
            })
            .then((data) => {
                this.setState({
                    user_info: data.user_info,
                    roles: data.roles,
                    skills: data.skills,
                    dataLoaded:true
                })

            })
            .catch((err) => {
                console.log('Fetch Error:', err);
            });
        console.log(id);

    }

    componentDidMount() {
        if (this.props.user_id === -1) {
            let data = getCurrentAuthUser()
            this.loadProfileData(data.user_id);
        } else {
            this.loadProfileData(this.props.user_id);
        }
    }

    render() {
        console.log(this.state);
        return (
            <Container fluid={true}>
                <Row>
                    <Col xl={1}>
                        <ModalPerson/>
                    </Col>
                    <Col>
                        <div className={s.whole_page}>
                            {/*{this.props.children}*/}
                            <Photo/>
                        </div>
                    </Col>
                </Row>
                <Name user={user}/>
                <SkillList skills={user.skills}/>
                {/*<Name user={user}/>*/}
                <SkillList/>

            </Container>
        );
    }
}