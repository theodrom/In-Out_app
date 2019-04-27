import React from 'react';
import UpperProfileSection from './UpperProfileSection.jsx';
import InfoProfileSection from './InfoProfileSection.jsx';
import BottomProfileSection  from "./BottomProfileSection.jsx";

const Profile = (props) => {
    return( 
        <section className="profile-section">
            <UpperProfileSection {...props}></UpperProfileSection>
            <InfoProfileSection {...props}></InfoProfileSection>
            <BottomProfileSection></BottomProfileSection>
        </section>
        
    );
};

export default Profile;