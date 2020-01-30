import React, {Component} from "react";
import NavBar from './Component/NavBar/NavBar';
import LogIn from './Component/Login/Login';
import Dashboard from './Component/Dashboard/Dashboard';
import LoginButton from './Component/Login/Button';
import UserForm from './Component/Login/Form';
import UserFormPW from './Component/Login/FormPW';

class App extends Component {
  state = {
    logIn: true,
  }

  
  render() {
    return (
      <div>
        <NavBar/>
        <UserForm />
        <UserFormPW />
        <LoginButton />
        { this.state.logIn ? <Dashboard /> : (
          <LogIn/> 
        )}
        
      </div>
    );
  }
}


export default App;
