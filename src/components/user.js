import React from "react";
import MedicinesListFunction from './medicine';
import UserDetails from './profile';
import BankDetails from './bankdetails'

function UserScreen() {

  return (
    <div class="container">
      <div class="auth-wrapper-signup">
      <div>
          <UserDetails />
        </div>
        <div>
          <BankDetails />
        </div>
        <div class="col-10">
        <MedicinesListFunction />
        </div>
      </div>
    </div>
  );
}


export default UserScreen;