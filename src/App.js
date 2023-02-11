import React from 'react';
import LoginPage from './Pages/Loginpage/Login.page';
import HomePage from './Pages/Homepage/Home.page';
import { Routes, Route } from 'react-router-dom';
import ProfilePage from './Pages/Profilepage/Profile.page';

import './App.css';

class App extends React.PureComponent{
  render(){
    return (
        <div className='App'>
          <Routes>
            <Route path = '/' element = {<HomePage/>} />
            <Route path = '/login' element = {<LoginPage/>}/>
            <Route path = '/profile' element = {<ProfilePage/>}/>
          </Routes>
        </div>
    )
  }
}

export default App;
