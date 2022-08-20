import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function UserDetails() {

    const user = useLocation();
    const [userdata, setuserdata] = useState([])
    const detailsURL = '/api/user/data?id=' + user.state.id;
    const updateData = '/api/user/update';

    useEffect(() => {
        getuserdata()
    }, [])

    const getuserdata = () => {
        fetch(detailsURL)
            .then(response => response.json())
            .then(
                (result) => {
                    setuserdata(result)
                },
                (error) => {
                    setuserdata(null);
                }
            )
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setuserdata({ ...userdata, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        await fetch(updateData, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userdata)
        });
        setuserdata(userdata)
    }

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
                        <label>Password</label>
                        <p>{user.state.password || ''}</p>
                    </div>
                    <div className="mb-3">
                        <label>Date of birthday</label>
                        <p>{user.state.dob || ''}</p>
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