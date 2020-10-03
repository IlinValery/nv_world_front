import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import Footer from "./Components/Footer";

import {library} from '@fortawesome/fontawesome-svg-core'
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import AuthPage from "./Components/AuthPage";
import Profile from "./Components/Profile"
import Location from "./Components/Location"
import {getImage} from "./Actions/profile";

library.add(faCheck, faTimes)

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state={
        }
    }



    render() {
        console.log("app", this.props.users[0].image);
        const user = this.props.users[0]
        console.log("name", user.name);
        return (
            <div className={"app-container"}>
                {/*<AuthPage/>*/}

                {/*<Footer/>*/}
                <Container fluid={true}>
                    <Row>
                        <Col xl="3">
                            <Profile image={user.image}
                            name={user.name}
                            position={user.position}
                            open={user.isOpenToProjects}/>
                        </Col>
                        <Col xl="9">
                            <Location >location</Location>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default connect(
    state => ({
        users: state.users
    }),
    dispatch => ({
        onGetImage: () => {
            dispatch(getImage());
        },
        onObtainImage: (id) => {
            // console.log('name', name);
            dispatch({ type: 'GET_IMAGE', payload: id});
        }
    })
)(App);
