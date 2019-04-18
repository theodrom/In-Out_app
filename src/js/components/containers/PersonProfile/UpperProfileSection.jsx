import React from 'react'; 
import AreaButton from "../../presentational/Buttons/AreaButton.jsx";
import Avatar from '../../presentational/Avatar.jsx';
import User from './../../../../assets/img/user-circle-512.png';

const UpperProfileSection = ({props}) => {
    return (
        <section className="upperProfileSection">
            <Avatar userImg={User} />
            <AreaButton></AreaButton>
            <AreaButton></AreaButton>
        </section>
    );
};

export default UpperProfileSection;