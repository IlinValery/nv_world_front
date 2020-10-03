import React from 'react';
import {connect} from 'react-redux';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            respData: null,
            connectionSuccessful: false
        }
    }

    testConnection(){
        fetch('/api/test_connection')
            .then( (response) => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    this.setState({connectionSuccessful:true})
                    return;
                } else {this.setState({connectionSuccessful:false})}
                return response.json();
            })
            .then((data) => {
                this.setState({
                    respData: data
                })
            })
            .catch((err) => {
                this.setState({
                    respData: null
                });

                console.log('Fetch Error:', err);
            });
    }
    componentDidMount() {
        this.testConnection();
    }

    render() {
        return (
            <div className={"app-container"}>
                <h1>hello nv_world</h1>
                <h3>connection to server: <b>{this.state.connectionSuccessful? "no": "yes"}</b> (move this to footer or status bar)</h3>
            </div>
        );
    }
}

export default connect(
    state => ({
        chosenLabel: state.label,
        labelingStatus: state.labelingStatus,
        existingMasks: state.masks,
        tempMask: state.tempMask,
        image: state.image,
        savingStatus: state.savingStatus
    }),
    dispatch => ({

    })
)(App);
