import React from 'react';
import LoginPage from './Pages/Loginpage/Login.page';
import HomePage from './Pages/Homepage/Home.page';
import { Routes, Route } from 'react-router-dom';
import ProfilePage from './Pages/Profilepage/Profile.page';
import SignUp from './Pages/SignUp/SignUp.page'

import './App.css';

class App extends React.PureComponent{
  render(){
    return (
        <div className='App'>
          <Routes>
            <Route path = '/' element = {<HomePage/>} />
            <Route path = '/login' element = {<LoginPage/>}/>
            <Route path = '/profile' element = {<ProfilePage/>}/>
            <Route path = '/signup' element = {<SignUp />} />
          </Routes>
        </div>
    )
  }
}

export default App;
