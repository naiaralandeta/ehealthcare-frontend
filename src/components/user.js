import React from "react";
import MedicinesListFunction from './medicine';
import UserDetails from './profile';
import BankDetails from './bankdetails';
import Orders from "./orders";

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
        <br />
        <div className="col-8">
          <MedicinesListFunction />
        </div>
      </div>
      <div className="col-4">
        <h3>Cart</h3>
      </div>
    </div>


  );
}


export default UserScreen;