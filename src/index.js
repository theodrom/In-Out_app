
import React from 'react';
import ReactDOM from 'react-dom';
import "./css/style.css";
import FormContainer from "./js/components/Examples/FormContainer.jsx";
import ProfileSection from "./js/components/containers/PersonProfile/ProfileSection.jsx";

// ReactDOM.render(
//   <FormContainer />,
//   document.getElementById('app')
// );


const profile = document.getElementById("profile");
ReactDOM.render(<ProfileSection />, profile);


module.hot.accept();