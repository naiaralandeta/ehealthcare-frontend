import React from "react";
import MedicinesListFunction from './medicine';
import UserDetails from './profile';
import BankDetails from './bankdetails';
import Orders from "./orders";
import Cart from "./cart";

function UserScreen() {

  return (

    <div className="container">
      <div className="auth-wrapper-signup">
        <div className="col-8">
          <UserDetails />
        </div>
        <div className="col-8">
          <BankDetails />
        </div>
        <div className="col-8">
          <Orders />
        </div>
        <div className="col-8">
          <Cart />
        </div>
        <br />
        <div className="col-8">
          <MedicinesListFunction />
        </div>
      </div>
    </div>


  );
}


export default UserScreen;