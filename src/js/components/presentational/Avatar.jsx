import React from 'react'; 

const Avatar = ({userImg}) => {
    return(
        <div className="avatar-holder">
            <img className="avatar-img" src={userImg} alt="user" title="the user icon"/>
        </div>
    ); 
};

export default Avatar;