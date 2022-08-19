import React, { useState, useEffect } from "react";

function BankDetails() {


    const [bankdata, setbankdata] = useState([])
    const [state, setstate] = useState([])
    const bankURL = '/api/user/bank-account'

    useEffect(() => {
        getbankdata()
    }, [])

    const getbankdata = () => {

        fetch(bankURL + '?id=' + 3, { method: 'GET' })
            .then(response => response.json())
            .then(
                (result) => {
                    setbankdata(result)
                    console.log(result)
                },
                (error) => {
                    setbankdata(null);
                }
            )
    }

    const handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    const handleSubmit = () => {

        fetch(bankURL + '?id=' + 3 + '&account=' + bankdata.accountNumber + '&funds=' + state, {
            method: 'PUT'
        });
        getbankdata()
    }

    return (
        <div class="container">
            <div class="auth-wrapper-signup">
                <div class="col-10">
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
                            value={this.setState}
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
                    <br /><br />
                </div>
            </div>
        </div>
    );
}


export default BankDetails;