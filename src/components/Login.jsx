import React, { useState } from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";

export default function Login() {

    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = async () => {
        let payload={
            "username": username,
            "password": password
        }
        const response = await axios.post("/auth/login", payload)
        if(response.data.status === "success") {
            console.log("login successfull");
            dispatch({ type: "TOGGLE_LOGIN" });
            dispatch({ type: "TOGGLE_MAIN_PAGE" })
        } 
        else if (response.data.status == "User not found") {
            console.log("Username password do not match");
            alert("User not found")
        } else {
            alert("error");
        }
    }

    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
            id="standard-basic" 
            label="Username"
            onChange = {(event) => setUsername(event.target.value)}
             />
           <br/>
             <TextField
               id="standard-password-input"
               label="Password"
               type="password"
               autoComplete="current-password"
               onChange = {(event) => setPassword(event.target.value)}
               />
             <br/><br/>
             <Button label="Login" variant="outlined" color="secondary" onClick={() => handleClick()}>Login</Button>
         </div>
         </MuiThemeProvider>
      </div>
    );

}
const style = {
 margin: 15,
};
