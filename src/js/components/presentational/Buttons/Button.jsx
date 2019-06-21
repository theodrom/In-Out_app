import React from 'react';  

const Button = ({btnLabel, btnStateClass, swiperclass}) => {
    return(
        <div className={`${swiperclass} btn-holder`}>
            <button className={`btn ${btnStateClass} `}>
                {btnLabel} button text 
            </button>
        </div>
    );
};

export default Button;