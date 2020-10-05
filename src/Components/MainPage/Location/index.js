import React from 'react';
import './style.css'
import {connect} from "react-redux";
import {getCookie, getCurrentAuthUser} from "../../../utils";
import Skill from "../SideBar/Profile/Description/Skills_list/Skill";
import WhoIsHere from "./WhoIsHere";


class Location extends React.Component {

    constructor(props){
        super(props);

        this.state={
            loaded: false,
            room_info: {},
            users: []
        }
    }

    updateMap(){
        let data = getCurrentAuthUser();
        fetch('/api/room/by_user/'+data.user_id)
            .then((response) => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                return response.json();
            })
            .then((data) => {
                console.log(data)
                this.setState({
                    room_info: data.room_info,
                    users: data.users,
                    loaded: true
                })

            })
            .catch((err) => {
                console.log('Fetch Error:', err);
            });
    }
    componentDidMount() {
        this.updateMap();
    }


    renderSkillList(array) {
        console.log(array);
        const objectsItems = [];
        for (let i = 0; i < array.length; i++) {
            objectsItems.push(<WhoIsHere key={i} name={array[i].name}/>);
        }
        return objectsItems;
    }

    render() {
        return (
            <div className={"location-container"}>
                {this.state.loaded? <div>
                    <h1>Location: {this.state.room_info.title}</h1>
                    <p>welcome next people:</p>
                    {this.renderSkillList(this.state.users)}
                    <img className={"img-map"} src={this.state.room_info.sprite} alt={"map"}/>
                    {/*<h1>asdads</h1>*/}
                </div> : <div>Loading...</div>}
            </div>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({

    })
)(Location);