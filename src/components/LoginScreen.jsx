import React, { useState } from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Login from './Login';
import Register from './Register';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';

export default function LoginScreen() {

    const dispatch = useDispatch();
    const loginToggle = useSelector(state => state.loginToggle)

    const [toggleUserReg, setToggleUserReg] = useState(true);
    const [loginMessage, setLoginMessage] = useState("Not registered yet? Register Now!");
    const [buttonLabel, setButtonLabel] = useState("Register");

    function handleClick() {
        if(toggleUserReg){
            setLoginMessage("Already registered? Go to Login")
            setButtonLabel("Login")
            setToggleUserReg(!toggleUserReg)
        }
        else{
            setLoginMessage("Not registered yet? Register Now!")
            setButtonLabel("Register")
            setToggleUserReg(!toggleUserReg)
        }
      }
    
      const logoutClick = async () => {
        const response = await axios.get("/auth/logout")
        dispatch({ type: "TOGGLE_LOGIN" });
        alert("You are logged out")
    }
 
    return (
        <>
        { loginToggle ? 
        <div className="loginscreen">
            <div>
                You are logged in!
            <MuiThemeProvider>
                <div>
                <br/>
               <Button label="Logout" variant="outlined" color="secondary" onClick={() => logoutClick()}>Logout</Button>
                </div>
            </MuiThemeProvider>
            </div>
        </div> 
        : 
        <div className="loginscreen">
            {toggleUserReg ? <Login/> : <Register/>}
            <div>
                <br/>
                {loginMessage}
            <MuiThemeProvider>
                <div>
                <br/>
               <Button label={buttonLabel} variant="outlined" color="secondary" onClick={() => handleClick()}>{buttonLabel}</Button>
                </div>
            </MuiThemeProvider>
            </div>
        </div> }
        </>
    );
  
}
const style = {
  margin: 15,
};
