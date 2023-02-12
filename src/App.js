import React from 'react';
import LoginPage from './Pages/Loginpage/Login.page';
import HomePage from './Pages/Homepage/Home.page';
import { Routes, Route } from 'react-router-dom';
import ProfilePage from './Pages/Profilepage/Profile.page';

import './App.css';
import SignUp from './Components/SignUP/SignUP.Components';

class App extends React.Component{
  render(){
    return (
        <div className='App'>
          <Routes>
            <Route path = '/' element = {<HomePage/>} />
            <Route path = '/login' element = {<LoginPage/>}/>
            <Route path = '/profile' element = {<ProfilePage/>}/>
            <Route path = '/signup' element = {<SignUp/>}/>
          </Routes>
        </div>
    )
  }
}

export default App;
