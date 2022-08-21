import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function BankDetails() {

    const user = useLocation();
    const [bankdata, setbankdata] = useState([])
    const [state, setstate] = useState([])
    const bankURL = '/api/user/bank-account'

    useEffect(() => {
        getbankdata()
    }, [])

    const getbankdata = () => {

        fetch(bankURL + '?id=' + user.state.id, { method: 'GET' })
            .then(response => response.json())
            .then(
                (result) => {
                    setbankdata(result)
                },
                (error) => {
                    setbankdata(null);
                }
            )
    }

    const handleChange = event => {
        setstate(event.target.value);
    };

    const handleSubmit = () => {
        fetch(bankURL + '?id=' + user.state.id + '&account=' + bankdata.accountNumber + '&funds=' + state, {
            method: 'PUT'
        }).then(() => { getbankdata() });
    }

    return (
        <div className="container">
            <div className="auth-wrapper-all">
                <div className="auth-inner-all">
                    <div className="col-10">
                        <h3>Bank Details</h3>
                        <div className="mb-3">
                            <label>Bank Account</label>
                            <p>{bankdata.accountNumber || ''}</p>
                        </div>
                        <div className="mb-3">
                            <label>Funds</label>
                            <p>{bankdata.funds || ''}</p>
                        </div>
                        <div>
                            <label>Add funds</label>
                            <input
                                type="number"
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Insert quantity" min="0"
                            />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                                Add funds
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default BankDetails;