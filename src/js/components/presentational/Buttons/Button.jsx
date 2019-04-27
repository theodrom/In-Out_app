import React from 'react';  

const Button = ({btnLabel, btnStateClass}) => {
    return(
        <div className="btn-holder">
            <button className={`btn ${btnStateClass} `}>
                {btnLabel} button text
            </button>
        </div>
    );
};

export default Button;