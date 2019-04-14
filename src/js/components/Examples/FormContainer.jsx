import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "./Input.jsx";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";

class FormContainer extends Component {
  constructor() {
    super();

    this.state = {
      seo_title: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { seo_title } = this.state;
    return (
      <form id="article-form">
        <Input
          text="SEO title hot reload"
          label="seo_title"
          type="text"
          id="seo_title"
          value={seo_title}
          handleChange={this.handleChange}
        />
        <Button variant="contained" color="secondary">
          Default
        </Button>
        <ButtonBase>
          <div>
            sample text
          </div>
        </ButtonBase>
       
      </form>
    );
  }
}

export default FormContainer;