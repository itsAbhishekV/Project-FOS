import React from 'react';
import LoginPage from './Pages/Loginpage/Login.page';
import HomePage from './Pages/Homepage/Home.page';
import { Routes, Route } from 'react-router-dom';
import ProfilePage from './Pages/Profilepage/Profile.page';
import CreateAccountPage from './Pages/CreateAccountPage/CreateAccount.page';
import { auth } from './Firebase/firebase.util';
import { Navigate } from 'react-router-dom';

import './App.css';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      user: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true, user });
      } else {
        this.setState({ loggedIn: false, user: null });
      }
    });
  }

  render(){
    console.log(this.state)
    console.log(this.state.user)
    return (
        <div className='App'>
          <Routes>
            <Route exact path = '/' element = {<HomePage/>} />
            <Route exact path = '/profile' element = {<ProfilePage/>} />
            <Route exact path = '/createAccount' element = {<CreateAccountPage/>} />
            <Route exact path = '/login' element = {this.state.loggedIn ? <Navigate to = '/' /> : <LoginPage/>} />
          </Routes>
        </div>
    )
  }
}

export default App;
