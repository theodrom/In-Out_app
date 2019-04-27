import React from 'react'; 

const Avatar = (props) => {
    console.log(props.userimg);
    return(
        <div className="avatar-holder">
            <img className="avatar-img" src={props.userimg} alt={`${props.userimg ? props.fnamevalue + ' ' + props.lnamevalue + ' image' : 'static-user-image'} `} title="the user's icon"/>
        </div>
    ); 
};

export default Avatar;