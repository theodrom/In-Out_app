import React from 'react'; 
import AreaButton from "../../presentational/Buttons/AreaButton.jsx";
import Avatar from '../../presentational/Avatar.jsx';

const UpperProfileSection = ({props}) => {
    return (
        <section className="upperProfileSection">
            <Avatar></Avatar>
            <AreaButton></AreaButton>
            <AreaButton></AreaButton>
        </section>
    );
};

export default UpperProfileSection;