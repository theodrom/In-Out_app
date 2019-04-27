import React, { useState, useEffect } from 'react';
import LabelInfo from './../../presentational/LabelInfo.jsx';

const InfoProfileSection = (props) => {
    const [displayName, setDisplayName] = useState("no-display");
    const [displaySpec, setDisplaySpec] = useState("no-display");
    const [displayEmail, setDisplayEmail] = useState("no-display");
    const [displayMobile, setDisplayMobile] = useState("no-display");

    // let fnameValue = "",
    //     lnameValue = "",
    //     specValue = "",
    //     emailValue = "",
    //     mobileValue = "";

    // fnameValue = "theo";
    // lnameValue = "m";
    // specValue = "Developer";
    //     emailValue = "e";
    //     mobileValue = "123456789";

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
                <LabelInfo 
                    infovalue={props.fnamevalue}
                    displaystate={displayName}>
                </LabelInfo>
                <LabelInfo 
                    infovalue={props.specvalue}
                    displaystate={displaySpec}>
                </LabelInfo>
                <LabelInfo 
                    infovalue={props.emailvalue}
                    displaystate={displayEmail}>
                </LabelInfo>
                <LabelInfo 
                    infovalue={props.mobilevalue}
                    displaystate={displayMobile}>
                </LabelInfo>
            </section>
        );  
};

export default InfoProfileSection;