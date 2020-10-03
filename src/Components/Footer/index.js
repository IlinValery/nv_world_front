import React from 'react';
import './style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default class Footer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            respData: null,
            connectionSuccessful: false
        }

    }

    componentDidMount() {
        fetch('/api/test_connection')
            .then((response) => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    this.setState({connectionSuccessful: false});
                    return;
                } else {
                    this.setState({connectionSuccessful: true})
                }
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

    render() {
        return (
            <div>
                <footer className={"footer-sticky"}>

                    <div className={"row"}>
                        <div className={"col-sm-6 text-left"}>
                            <a href="https://github.com/IlinValery/nv_world_front">Game of ©<span role={"img"} aria-label="rocket boom">🚀💥</span> Rocket Boom Team</a>
                        </div>
                        <div className={"col-sm-6 text-right support-contact"}>
                            {this.state.connectionSuccessful ? (
                                <div>
                                    Connection status: <FontAwesomeIcon icon="check" color={"green"}
                                                                        title={"Connection with backend was established"}/>
                                </div>
                            ) : (
                                <div>
                                    Connection status: <FontAwesomeIcon icon="times" color={"red"} spin
                                                                        title={"No connection with server"}/>
                                </div>
                            )}

                        </div>

                    </div>
                </footer>
            </div>

        );
    }
}
//times or check