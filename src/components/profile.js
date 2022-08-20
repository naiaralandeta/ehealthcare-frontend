import React from "react";
import { useLocation } from "react-router-dom";
import Moment from 'moment';

function UserDetails() {

    Moment.locale('en');
    const user = useLocation();

    return (
        <div class="container">
            <div class="auth-wrapper-signup">
                <div class="col-10">
                    <h3>Profile</h3>
                    <div className="mb-3">
                        <label>Reference number</label>
                        <p>{user.state.id || ''}</p>
                    </div>
                    <div className="mb-3">
                        <label>Username</label>
                        <p>{user.state.username || ''}</p>
                    </div>
                    <div className="mb-3">
                        <label>First name</label>
                        <p>{user.state.firstname || ''}</p>
                    </div>
                    <div className="mb-3">
                        <label>Last name</label>
                        <p>{user.state.lastname || ''}</p>
                    </div>
                    <div className="mb-3">
                        <label>Email address</label>
                        <p>{user.state.email || ''}</p>
                    </div>
                    <div className="mb-3">
                        <label>Date of birthday</label>
                        <p>{Moment(user.state.dob).format("MM-D-YYYY") || ''}</p>
                    </div>
                    <div className="mb-3">
                        <label>Phone</label>
                        <p>{user.state.phone || ''}</p>
                    </div>
                    <div className="mb-3">
                        <label>Address</label>
                        <p>{user.state.address || ''}</p>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default UserDetails;