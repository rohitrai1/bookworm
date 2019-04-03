import React, { Component } from "react";
import validator from "validator";

class LoginForm extends Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {},
    validateClassEmail: "",
    validateClassPassword: ""
  };

  handleLoginFormChange = event => {
    this.setState({
      data: { ...this.state.data, [event.target.name]: event.target.value }
    });
  };

  handleLoginFormSubmit = event => {
    const errors = this.validate(this.state.data);
    this.setState({
      errors
    });

    if (errors.email && errors.password) {
      event.preventDefault();
    } else {
      // API call logic goes here
    }
  };

  validate = data => {
    const errors = {};
    if (!validator.isEmail(data.email)) {
      errors.email = "Invalid email";
      this.setState({
        validateClassEmail: "is-invalid"
      });
    } else {
      this.setState({
        validateClassEmail: "is-valid"
      });
    }
    if (!data.password) {
      errors.password = "Password can't be blank";
      this.setState({
        validateClassPassword: "is-invalid"
      });
    } else {
      this.setState({
        validateClassPassword: "is-valid"
      });
    }
    return errors;
  };

  render() {
    return (
      <form
        onSubmit={this.handleLoginFormSubmit}
        className="needs-validation"
        noValidate
      >
        <div className="form-group">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              className={`${this.state.validateClassEmail} form-control`}
              onChange={this.handleLoginFormChange}
              value={this.state.data.email || ""}
            />
            <div className="invalid-feedback">{this.state.errors.email}</div>
          </div>

          <div className="form-group">
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className={`${this.state.validateClassPassword} form-control`}
                id="password"
                placeholder="password"
                onChange={this.handleLoginFormChange}
                value={this.state.data.password || ""}
              />
              <div className="invalid-feedback">
                {this.state.errors.password}
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
