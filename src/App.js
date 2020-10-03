import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import Footer from "./Components/Footer";

import {library} from '@fortawesome/fontawesome-svg-core'
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import AuthPage from "./Components/AuthPage";

library.add(faCheck, faTimes)

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state={
        }
    }

    render() {
        return (
            <div className={"app-container"}>
                <AuthPage/>

                <Footer/>
            </div>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({

    })
)(App);
