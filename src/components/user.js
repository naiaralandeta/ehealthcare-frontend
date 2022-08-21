import React from "react";
import { Link } from 'react-router-dom'
import MedicinesListFunction from './medicine';
import UserDetails from './profile';


function UserScreen() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={'/login'}>
            Ehealthcare
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={'/medicines'}>
                  Medicines
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/cart'}>
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/orders'}>
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/bank'}>
                  Bank Information
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/profile'}>
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Link className="navbar-brand" to={'/logout'}>
            Log out
          </Link>
        </div>
      </nav>
      <div className="auth-wrapper-all">
        <div className="container">
          <div>
            <MedicinesListFunction />
          </div>
        </div>
      </div>

    </div>

  );
}


export default UserScreen;