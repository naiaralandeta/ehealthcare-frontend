import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const MedicinesListFunction = () => {

    const user = useLocation();
    const [medicineslist, setmedicines] = useState([])
    const medicinesURL = '/api/admin/medicines'
    const generalURL = '/api/user'
    const [quantity, setquantity] = useState([])
    const [search, setsearch] = useState([])
    const [cartid, setcart] = useState(0)

    const handleChange = event => {
        setsearch(event.target.value);
    };

    const onChange = event => {
        setquantity(event.target.value);
    };

    useEffect(() => {
        getmedicines()
    }, [])

    const getmedicines = () => {
        fetch(medicinesURL)
            .then(response => response.json())
            .then(
                (result) => {
                    setmedicines(result)
                },
                (error) => {
                    setmedicines(null);
                }
            )
    }

    const getuses = () => {
        fetch(generalURL + '/uses?uses=' + search)
            .then(response => response.json())
            .then(
                (result) => {
                    setmedicines(result)
                },
                (error) => {
                    setmedicines(null);
                }
            )
    }

    const getdisease = () => {
        fetch(generalURL + '/disease?disease=' + search)
            .then(response => response.json())
            .then(
                (result) => {
                    setmedicines(result)
                },
                (error) => {
                    setmedicines(null);
                }
            )
    }

    const addMedicine = (data) => {
        data.quantity = Number(quantity)
        fetch(generalURL + '/cart?id=' + user.state.id + '&cart=' + cartid, {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(new Array (data))
        }).then(response => response.json())
        .then(
            (result) => {
                console.log(result.id)
                
            }
        )
    }

    if (!medicineslist) return (<div>No Record Found</div>)

    return (<div>
        <h2> Medicines </h2>
        <table className="table">
            <thead>
                <tr>
                    <th>Medicine</th>
                    <th>Company</th>
                    <th>Price</th>
                    <th>Uses
                        <br />
                        <input id="search" className="p-2 font-lg shadow border border-block" type="text" placeholder="Search uses.." onChange={handleChange} />
                        <button type="button" className="btn btn-primary" onClick={getuses}>
                            <i className="fas fa-search">Search</i>
                        </button>
                    </th>
                    <th>Disease
                        <input id="search" className="p-2 font-lg shadow border border-block" type="text" placeholder="Search disease.." onChange={handleChange} />
                        <button type="button" className="btn btn-primary" onClick={getdisease}>
                            <i className="fas fa-search">Search</i>
                        </button>
                    </th>
                    <th>Discount</th>
                    <th>
                        <button type="button" className="btn btn-primary" onClick={getmedicines}>
                            <i className="fas fa-search"> Reresh search </i>
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {medicineslist.map(medicine => (
                    <tr key={medicine.id}>
                        <td> {medicine.name} </td>
                        <td> {medicine.company} </td>
                        <td> {medicine.price} </td>
                        <td> {medicine.uses} </td>
                        <td> {medicine.disease} </td>
                        <td> {medicine.discount} </td>
                        <td>
                            <div>
                                <input
                                    type="number"
                                    onChange={onChange}
                                    className="form-control"
                                    placeholder="Insert quantity" min="0"
                                />
                            </div>
                            <div className="d-grid">
                                <button onClick={() => addMedicine(medicine)}>Add</button>
                            </div>
                            <button type="submit" className="btn btn-primary">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}


export default MedicinesListFunction;