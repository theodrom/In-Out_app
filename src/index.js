
import React from 'react';
import ReactDOM from 'react-dom';
import "./css/style.css";
import FormContainer from "./js/components/Examples/FormContainer.jsx";
import UpperProfileSection from "./js/components/containers/PersonProfile/UpperProfileSection.jsx";

ReactDOM.render(
  <FormContainer />,
  document.getElementById('app')
);


const profile = document.getElementById("profile");
ReactDOM.render(<UpperProfileSection />, profile);


module.hot.accept();