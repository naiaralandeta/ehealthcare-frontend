import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/signup'
import Admin from './components/admin'
import Logout from './components/logout';
import MedicinesListFunction from './components/medicine';
import UserDetails from './components/profile';
import Orders from './components/orders';
import Cart from './components/cart';
import BankDetails from './components/bankdetails';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/login'}>
              Ehealthcare
            </Link>
          </div>
          <div>
            <Link className="navbar-brand" to={'/sign-up'}>
            Sign up
            </Link>
          </div>
        </nav>
        <Routes>
          <Route exact path = "/" element = {<Login />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/sign-up" element = {<SignUp />} />
          <Route path = "/admin" element = {<Admin />} />
          <Route path = "/logout" element = {<Logout/>}/>
          <Route path = "user/medicines/:id" element = {<MedicinesListFunction/>}/>
          <Route path = "user/profile/:id" element = {<UserDetails/>}/>
          <Route path = "user/cart/:id" element = {<Cart/>}/>
          <Route path = "user/orders/:id" element = {<Orders/>}/>
          <Route path = "user/bank/:id" element = {<BankDetails/>}/>
        </Routes>
      </div>
    </Router>
  )
}
export default App;