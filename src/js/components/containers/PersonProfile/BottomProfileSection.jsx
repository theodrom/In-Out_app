import React, { useState, useEffect }from 'react'; 
import Button from './../../presentational/Buttons/Button.jsx'; 
import IconAndText from './../../presentational/IconAndText.jsx';
import Swiper from 'react-id-swiper';


const BottomProfileSection = () => {

    return(
            <Swiper {...swiper}> 
                <div className="icon-text-wrapper">
                    <IconAndText iconclass="fas fa-question-circle" icontext="other" />
                    <IconAndText iconclass="fas fa-baby-carriage" icontext="parental leave" />
                    <IconAndText iconclass="fas fa-suitcase-rolling" icontext="on holiday" />
                    <IconAndText iconclass="fas fa-user-injured" icontext="sick" />
                </div>
                <Button swiperclass="swiper-slide center-state-btn">

                </Button>
                <div className="icon-text-wrapper">
                    <IconAndText iconclass="fas fa-user-alt-slash" icontext="off duty" />
                    <IconAndText iconclass="fas fa-baby" icontext="care of child" />
                    <IconAndText iconclass="fas fa-hands-helping" icontext="at client" />
                    <IconAndText iconclass="fas fa-utensils" icontext="lunch" />
                </div>
                
            </Swiper>
    );
};


var swiper = {
    direction: 'horizontal',
    effect:'slide',
    grabCursor: true,
    loop: false,
    initialSlide: 1,
    centeredSlides: true,
    speed: 300,
    containerClass: 'bottomProfileSection swiper-container',
    spaceBetween: 15,
    slidesperView: 1
};
export default BottomProfileSection;