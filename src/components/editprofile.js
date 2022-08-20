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
        <div className="modal" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Save changes</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default UserDetails;