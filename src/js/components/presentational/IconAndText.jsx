import React, { useState, useEffect } from "react";


function iconClick (e){
    // get all the btns
    const arr = document.querySelectorAll('.icon-text-holder');
    console.log("working");
    // loop through
    for (let i = 0; i < arr.length; i++) {

            const current = document.querySelectorAll(".ic-active");
            // If there's no active class
            // if (current.length > 0) {
            //     current[0].className = current[0].className.replace(" ic-active", "");
            // }

            console.log(e.currentTarget);
            if(current.length > 0){
                if(arr[i] == e.currentTarget){
                    e.currentTarget.classList.toggle("ic-active", false);
                }
                else{
                    arr[i].classList.remove('ic-active');
                    e.currentTarget.classList.add('ic-active');
                }
            }
            else{
                e.currentTarget.classList.add("ic-active");
            }
            // if(arr[i] == e.currentTarget){
            //     e.currentTarget.classList.toggle("ic-active", false);
            // }
            // else{
            //     const t = e.currentTarget.classList.contains('ic-active');
            //     console.log(t);
            //     // Add the active class to the current/clicked button
            //     if(e.currentTarget.classList.contains('ic-active')){
            //         e.currentTarget.classList.remove('ic-active');
            //     }
            //     else{
            //         e.currentTarget.classList.add("ic-active");
            //     }
            // }   
    }
};

const IconAndText = (props) => {

    useEffect(() => {
        
    });
        

    return (
        <div className="icon-text-holder" onClick={iconClick()}>
            <div><i className={props.iconclass}></i></div>
            <div className="icon-text">{props.icontext}</div>
        </div>
    );
};

export default IconAndText;

