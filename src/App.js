import React from 'react';
// import LoginPage from './Pages/LoginPage/Login.page';
import HomePage from './Pages/Homepage/Home.page';
import { Routes, Route } from 'react-router-dom';
import './App.css';

class App extends React.PureComponent{
  render(){
    return (
        <div className='App'>
          <Routes>
            <Route path = '/' element = {<HomePage/>} />
            <Route path = '/login' element = {<h2>login page</h2>}/>
          </Routes>
        </div>
    )
  }
}

export default App;
