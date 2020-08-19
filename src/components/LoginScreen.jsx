import React, { useState } from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Login from './Login';
import Register from './Register';

export default function LoginScreen() {

    const [toggleUserReg, setToggleUserReg] = useState(true);
    const [loginMessage, setLoginMessage] = useState("Not registered yet, Register Now");
    const [buttonLabel, setButtonLabel] = useState("Register");

    function handleClick() {
        if(toggleUserReg){
            setLoginMessage("Already registered? Go to Login")
            setButtonLabel("Login")
            setToggleUserReg(!toggleUserReg)
        }
        else{
            setLoginMessage("Not registered yet, Register Now!")
            setButtonLabel("Register")
            setToggleUserReg(!toggleUserReg)
        }
      }
 
    return (
      <div className="loginscreen">
        {toggleUserReg ? <Login/> : <Register/>}
        <div>
            {loginMessage}
          <MuiThemeProvider>
            <div>
               <Button label={buttonLabel} variant="outlined" color="secondary" onClick={() => handleClick()}>{buttonLabel}</Button>
           </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  
}
const style = {
  margin: 15,
};
