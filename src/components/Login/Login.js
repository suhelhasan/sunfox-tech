import React, { Component } from "react";
import styling from "./Login.module.css";
import logo from "./gestures.svg";
import { Redirect } from "react-router";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  constructor(){
    super();
  }

  componentDidMount(){
    console.log("Login",this.props);

  }

  emailChangeHandler = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  passwordChangeHandler = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    if(this.props.user!==null)
     return <Redirect to="/admin"/>

    return (
      
      <div className={styling.loginPage}>
        <div className={styling.login}>
          <div className={styling.header}>
            <img alt="logo" src={logo} />
            <h1>Hello, </h1>
            <h3>Please Login</h3>
          </div>
          <form>
            <input
              type="text"
              placeholder="Enter email address"
              onChange={this.emailChangeHandler}
              value={this.state.email}
            />
            <input
              type="password"
              placeholder="Enter Password"
              onChange={this.passwordChangeHandler}
              value={this.state.password}
            />
            <div className={styling.checkboxDiv}>
              <input type="checkbox" value="" />
              <label> Remember Me</label>
            </div>
            <input
              type="submit"
              value="Login"
              onClick={(e) =>
                this.props.onLoginHandler(
                  e,
                  this.state.email,
                  this.state.password
                )
              }
            />
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
