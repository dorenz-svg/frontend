import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { profileActionCreator } from '../../redux/reducers/Profile/profileReducer';
import { Wall } from './Wall';
const Profile:React.FC=()=> {
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(profileActionCreator.getProfile());
    },[]);
        return(
        <div>
            Profile
            <Wall/>
        </div>
        );
}
export default Profile;