import React, { useState } from 'react';  

const LabelInfo = (props) => {
    // console.log(props.infovalue); 
    return(
        <div className={props.extraclass}>
            <p className="label-info-p">
                <i className={props.icon}> </i>
                <span className="span-info-value"> {props.infovalue}</span>
            </p>
        </div>
    );
};
export default LabelInfo;