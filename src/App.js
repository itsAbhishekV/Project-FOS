import React from 'react';
import LoginPage from './Pages/LoginPage/Login.page';
import HomePage from './Pages/Homepage/Home.page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

class App extends React.PureComponent{
  render(){
    return (
      <Router>
      <div className='App'>
          <Routes>
            <Route exact path = '/' component = {HomePage} />
            <Route exact path = '/login' component = {LoginPage} />
          </Routes>
      </div>
      </Router>
    )
  }
}

export default App;
