import React, { useState, useEffect } from "react";


const IconAndText = (props) => {

    return(
        <div className="icon-text-holder">
            <div><i className={props.iconclass}></i></div>
            <div className="icon-text">{props.icontext}</div>
        </div>
    );
};

export default IconAndText;