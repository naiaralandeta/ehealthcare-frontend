import React, { useState, useEffect } from "react";
import BankDetails from './bankdetails';

function UserDetails() {

 /*   const [userdata, setuserdata] = useState(null)
    const detailsURL = '/api/user/data?id=' + 3;
    const updateData = 'update';

    useEffect(() => {
        getuserdata()
    }, [])

    const getuserdata = () => {
        fetch(detailsURL)
            .then(response => response.json())
            .then(
                (result) => {
                    setuserdata(result)
                    console.log(userdata)
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
                    <h1>Profile</h1>
                    <form onSubmit={handleSubmit}>
                        <h3>Sign Up</h3>
                        <div className="mb-3">
                            <label>Username</label>
                            <input
                                type="text" name="username" value={userdata.username || ''}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Username"
                            />
                        </div>
                        <div className="mb-3">
                            <label>First name</label>
                            <input
                                type="text" name="firstname" value={userdata.firstname || ''}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="First name"
                            />
                        </div>
                        <div className="mb-3">
                            <label>Last name</label>
                            <input type="text" name="lastname" value={userdata.lastname || ''}
                                onChange={handleChange}
                                className="form-control" placeholder="Last name" />
                        </div>
                        <div className="mb-3">
                            <label>Email address</label>
                            <input
                                type="email" name="email" value={userdata.email || ''}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password" name="password" value={userdata.password || ''}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="mb-3">
                            <label>Date of birthday</label>
                            <input
                                type="date" name="dob" value={userdata.dob || ''}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="DOB"
                            />
                        </div>
                        <div className="mb-3">
                            <label>Phone</label>
                            <input
                                type="text" name="phone" value={userdata.phone || ''}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Phone"
                            />
                        </div>
                        <div className="mb-3">
                            <label>Address</label>
                            <input
                                type="text" name="address" value={userdata.address || ''}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Address"
                            />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                                Edit
                            </button>
                        </div>
                    </form>
                </div>

            </div>

            <div>
                <BankDetails />
            </div>
        </div>

    );*/
}


export default UserDetails;