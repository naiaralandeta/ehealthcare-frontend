import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/signup'
import UserScreen from './components/user'
import Admin from './components/admin'
import Logout from './components/logout';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/login'}>
              Ehealthcare
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/user'}>
                    User
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Link className="navbar-brand" to={'/logout'}>
              Logout
            </Link>
          </div>
        </nav>
        <Routes>
          <Route exact path = "/" element = {<Login />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/sign-up" element = {<SignUp />} />
          <Route path = "/user" element = {<UserScreen />}/>
          <Route path = "/admin" element = {<Admin />} />
          <Route path = "/logout" element = {<Logout/>}/>
        </Routes>
      </div>
    </Router>
  )
}
export default App