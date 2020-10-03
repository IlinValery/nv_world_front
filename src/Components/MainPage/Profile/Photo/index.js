import React from 'react';
import { connect } from 'react-redux';
import s from './style.module.css'
import { getImage } from '../../../../Actions/profile';
import pic from "./data/user_image.svg"

const Photo = ({image}) => {
    // const state = onObtainImage(1);

    return (
        <div className={s.block_center}>
            {/*<button style={{visibility: "hidden"}} onLoad={onGetImage}/>*/}
            <img src={pic} className={s.photo_user}/>
        </div>
    );
}
// export default connect(
//     state => ({
//         user: state.users[0]
//     }),
//     dispatch => ({
//         onGetImage: () => {
//             dispatch(getImage());
//         },
//         onObtainImage: (id) => {
//             // console.log('name', name);
//             dispatch({ type: 'GET_IMAGE', payload: id});
//         }
//     })
// )(Photo);
export default Photo;