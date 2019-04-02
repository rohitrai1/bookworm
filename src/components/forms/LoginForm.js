import React, { Component } from "react";
import validator from "validator";

class LoginForm extends Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {}
  };

  handleLoginFormChange = event => {
    this.setState({
      data: { ...this.state.data, [event.target.name]: event.target.value }
    });
  };

  handleLoginFormSubmit = event => {
    event.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({
      errors
    });
  };

  validate = data => {
    const errors = {};
    if (!validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Password can't be blank";
    return errors;
  };

  render() {
    return (
      <form onSubmit={this.handleLoginFormSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            className="form-control"
            onChange={this.handleLoginFormChange}
            value={this.state.data.email || ""}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>

          {this.state.errors.email && (
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              {this.state.errors.email}
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="password"
              onChange={this.handleLoginFormChange}
              value={this.state.data.password || ""}
            />
          </div>
          {this.state.errors.password && (
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              {this.state.errors.password}
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
