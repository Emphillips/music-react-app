import React, {Component} from "react";
import NavBar from './Component/NavBar/NavBar';
import LogIn from './Component/Login/Login';
import Dashboard from './Component/Dashboard/Dashboard';



class App extends Component {
  state = {
    logIn: true
  }

  
  render() {
    return (
      <div>
        <NavBar/>
        { this.state.logIn ? <Dashboard /> : (
          <LogIn/>
        )}
      </div>
    );
  }
}


export default App;
