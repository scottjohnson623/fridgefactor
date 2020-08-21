import React, { useState } from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { useDispatch } from "react-redux";

export default function Register() {

    const dispatch = useDispatch();  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = async (event) => {
        let payload={
        "username": username,
        "password": password
        }
        const response = await axios.post("/auth/register", payload)
        console.log(response);
        if(response.status == 200){
        console.log("registration successfull");
        dispatch({ type: "TOGGLE_LOGIN" });
        } else {
        console.log("registration failed");
        }
    };
    
    
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <TextField
             id="standard-basic" 
             label="Username"
             onChange = {(event) => {
                 setUsername(event.target.value); 
                }}
             />
           <br/>
           <TextField
             id="standard-password-input"
             label="Password"
             type="password"
             onChange = {(event) => setPassword(event.target.value)}
             />
           <br/><br/>
           <Button label="Register" variant="outlined" color="secondary" onClick={() => handleClick()}>Register</Button>
          </div>
         </MuiThemeProvider>
      </div>
    );
  
}
const style = {
  margin: 15,
};
