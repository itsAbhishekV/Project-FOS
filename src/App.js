import React from 'react';
import LoginPage from './Pages/Loginpage/Login.page';
import HomePage from './Pages/Homepage/Home.page';
import { Routes, Route } from 'react-router-dom';
import ProfilePage from './Pages/Profilepage/Profile.page';
import CreateAccountPage from './Pages/CreateAccountPage/CreateAccount.page';
import './App.css';

class App extends React.Component{
  render(){
    return (
        <div className='App'>
          <Routes>
            <Route path = '/' element = {<HomePage/>} />
            <Route path = '/login' element = {<LoginPage/>} />
            <Route path = '/profile' element = {<ProfilePage/>} />
            <Route path = '/createAccount' element = {<CreateAccountPage/>} />
          </Routes> 
        </div>
    )
  }
}

export default App;
