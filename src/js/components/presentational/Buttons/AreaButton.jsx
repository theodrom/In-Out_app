import React from "react";

const AreaButton = ({classname, pressed, onClickFunction}) => {
    const handleClick = () => {
        onClickFunction(classname, pressed); 
    };
    return (
    <div className={`areaBtn ${classname}`} role="button" onClick={handleClick} area-pressed={pressed}>
        area button

    </div>)
    ;
};

export default AreaButton;
