import React, { useState } from "react";
import styling from "./Login.module.css";
import helloImg from "../../assets/images/gestures.svg";
import { Redirect } from "react-router";
import Loader2 from '../UI/Loader2/Loader2';
import {useSelector} from 'react-redux';

export default function Login (props){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const authState = useSelector(state=>state.auth);
  const user = authState.user;
  const error = authState.error;
  

  return (
    (user!==null)?
      <Redirect to="/admin"/>:
      <div className={styling.loginPage}>
        
        {props.loading?
          <div className={styling.loginLoadingSection}>
          <Loader2 size="80"/> 
          <p>Logging in... Please wait.</p>
          </div>:
        <div className={styling.login}>
          
          <div className={styling.header}>
            <img alt="logo" src={helloImg} />
            <h1>Hello, </h1>
            <h3>Please Login</h3>
          </div>
          <form>
            <input
              type="text"
              placeholder="Enter email address"
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
            />
            <div className={styling.checkboxDiv}>
              <input type="checkbox" value="" />
              <label> Remember Me</label>
            </div>
            <input
              type="submit"
              value="Login"
              onClick={(e) =>
                props.onLoginHandler(
                  e,
                  email,
                  password
                )
              }
            />
          </form>
            {
              error !==null?
            <p className={styling.error}>{""+error}</p>
              :null
            }
        </div>
  }
      </div>
    
  )
}
