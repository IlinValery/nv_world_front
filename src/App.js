import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import jwt_decode from "jwt-decode";

import Footer from "./Components/Footer";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCheck, faTimes, faEdit, faDoorOpen} from "@fortawesome/free-solid-svg-icons";
// import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import AuthPage from "./Components/AuthPage";
// import Profile from "./Components/MainPage/SideBar/Profile"
// import Location from "./Components/Location"
import {getImage} from "./Actions/profile";
import MainPage from "./Components/MainPage";

library.add(faCheck, faTimes, faEdit, faDoorOpen)

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            isLoggedIn:false
        }
    }

    componentDidMount() {

    }
    UNSAFE_componentWillMount() {
        const token = localStorage.getItem('usertoken');
        if (token!==undefined){
            try {
                let data = jwt_decode(token);
                console.log(data)
                this.setState({
                    isLoggedIn: true
                })
            } catch (err) {
                localStorage.clear();
                this.setState({
                    isLoggedIn: false
                })

            }
        }
    }

    render() {
        console.log("app", this.props.users[0].image);
        const user = this.props.users[0]
        console.log("name", user.name);
        return (
            <div className={"app-container"}>
                {this.state.isLoggedIn? <MainPage/>:<AuthPage/>}
                <Footer/>
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
