import React, { useState } from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
// import Login from './Login';

export default function Register() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = async (event) => {
        var payload={
        "username": username,
        "password": password
        }
        await axios.post("/auth/register", payload)
    .then(function (response) {
        console.log(response);
        if(response.data.code == 200){
        console.log("registration successfull");
        }
    })
    .catch(function (error) {
        console.log(error);
    });
    }
    
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
                 console.log(event.target.value)
                }}
             />
           <br/>
           <TextField
             id="standard-password-input"
             label="Password"
             type="password"
             onChange = {(event) => setPassword(event.target.value)}
             />
           <br/>
           <Button label="Register" variant="outlined" color="secondary" onClick={() => handleClick()}>Register</Button>
          </div>
         </MuiThemeProvider>
      </div>
    );
  
}
const style = {
  margin: 15,
};