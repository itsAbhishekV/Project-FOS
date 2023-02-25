import React from 'react';
import LoginPage from './Pages/Loginpage/Login.page';
import HomePage from './Pages/Homepage/Home.page';
import { Routes, Route } from 'react-router-dom';
import ProfilePage from './Pages/Profilepage/Profile.page';
import CreateAccountPage from './Pages/CreateAccountPage/CreateAccount.page';
import { Navigate } from 'react-router-dom';
import { auth } from './Firebase/firebase.util';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        user: null
    }
}
  unsubscribeFromAuth = null

  componentDidMount(){

    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      if(user){
        this.setState({user: user})
      }
      else(
        console.log('not logged in')
      )
    }
      )
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
}

  render() {
    console.log(this.state.user)
    return (
        <div className='App'>
          <Routes>
            <Route exact path = '/' element = {<HomePage/>} />
            <Route exact path = '/profile' element = {<ProfilePage/>} />
            <Route exact path = '/createAccount' element = {<CreateAccountPage/>} />
            <Route exact path = '/login' element = {this.state.user ? <Navigate to = '/' /> : <LoginPage/>} />
          </Routes>
        </div>
    )
  }
}


export default App;
