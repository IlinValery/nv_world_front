import React from 'react';
import s from './style.module.css'
import male from "./data/male.png"
import female from "./data/female.png"

class Photo extends React.Component {

    constructor(props){
        super(props);

        this.state={

        }
    }


    render() {
        return (
            <div className={s.block_center}>
                {this.props.user.photo?
                    <></>:
                    <img src={this.props.user.is_male?male:female} className={s.photo_user} alt={"avatar"}/>
                }
            </div>
        );
    }
}

export default Photo;