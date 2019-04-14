import React from 'react'; 
import User from './../../../assets/img/user-circle-512.png';

const Avatar = () => {
    return(
        <div>
            <img src={User} alt="user" title="the user icon"/>
        </div>
    ); 
};

export default Avatar;