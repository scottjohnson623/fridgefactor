import React, { useState } from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

// constructor(props){
//   super(props);
//   this.state={
//   username:'',
//   password:''
//   }


    //Below is an example handleEvent click for clicking login...
// handleClick(event){
//     var apiBaseUrl = "http://localhost:4000/api/";
//     var self = this;
//     var payload={
//     "email":this.state.username,
//     "password":this.state.password
//     }
//     axios.post(apiBaseUrl+'login', payload)
//     .then(function (response) {
//     console.log(response);
//     if(response.data.code == 200){
//     console.log("Login successfull");
//     var uploadScreen=[];
//     uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
//     self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
//     }
//     else if(response.data.code == 204){
//     console.log("Username password do not match");
//     alert("username password do not match")
//     }
//     else{
//     console.log("Username does not exists");
//     alert("Username does not exist");
//     }
//     })
//     .catch(function (error) {
//     console.log(error);
//     });
//     }
 

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
             <Button label="Login" variant="outlined" color="secondary" onClick={(event) => this.handleClick(event)}>Login</Button>
         </div>
         </MuiThemeProvider>
      </div>
    );

}
const style = {
 margin: 15,
};
