import React, { useState } from 'react';  

const LabelInfo = (props) => {
    console.log(props.infovalue); 
    return(
        <div className="">
            <p className="label-info-p">
                {/* <span className={`span-info-key ${displayState}`}>{infoKey}</span> */}
                <span className="span-info-value">{props.infovalue}</span>
            </p>
        </div>
    );
};
export default LabelInfo;