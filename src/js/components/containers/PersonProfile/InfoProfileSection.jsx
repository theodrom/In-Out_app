import React, { useState, useEffect } from 'react';
import LabelInfo from './../../presentational/LabelInfo.jsx';

const InfoProfileSection = (props) => {
    const [displayName, setDisplayName] = useState("no-display");
    const [displaySpec, setDisplaySpec] = useState("no-display");
    const [displayEmail, setDisplayEmail] = useState("no-display");
    const [displayMobile, setDisplayMobile] = useState("no-display");

        useEffect(() => {      
            if(!props.fnamevalue){
                setDisplayName("");
            }
            if(!props.specvalue){
                setDisplaySpec("");
            }
            if(!props.emailvalue){
                setDisplayEmail("");
            }
            if(!props.mobilevalue){
                setDisplayMobile("");
            }
        });
        
        return(
            <section className="infoProfileSection">
                <div className="label-row-holder">
                    <LabelInfo 
                        extraclass="name-label"
                        infovalue={props.fnamevalue}
                        displaystate={displayName}>
                    </LabelInfo>
                    <LabelInfo 
                        extraclass="name-label"
                        infovalue={props.lnamevalue}
                        displaystate={displayName}>
                    </LabelInfo>
                    <LabelInfo 
                        extraclass="spec-label"
                        infovalue={props.specvalue}
                        displaystate={displaySpec}>
                    </LabelInfo>
                </div>
                <LabelInfo 
                    extraclass="icon-span-in-row-holder"
                    icon="fas fa-envelope"
                    infovalue={props.emailvalue}
                    displaystate={displayEmail}>
                </LabelInfo>
                <LabelInfo 
                    extraclass="icon-span-in-row-holder"
                    icon="fas fa-phone"
                    infovalue={props.mobilevalue}
                    displaystate={displayMobile}>
                </LabelInfo>
            </section>
        );  
};

export default InfoProfileSection;