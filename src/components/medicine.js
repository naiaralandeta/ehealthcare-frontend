import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'

const MedicinesListFunction = () => {

    const medicinesURL = '/api/admin/medicines'
    const generalURL = '/api/user'
    const user = useLocation();
    const [medicineslist, setmedicines] = useState([])
    const [quantity, setquantity] = useState([])
    const [search, setsearch] = useState([])

    const statusOrder = {
        ordered: 'ORDERED',
        dispatching: 'DISPATCHING',
        shipped: 'SHIPPED',
        delivered: 'DELIVERED',
    }

    var templateCart = {
        id: '',
        owner: '',
        medname: '',
        quantity: '',
        status: '',
        total: '',
        date: '',
        price: '',
        discount: ''
    }

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

        templateCart.owner = user.state.id
        templateCart.medname = data.name
        templateCart.quantity = Number(quantity)
        templateCart.price = data.price
        templateCart.discount = data.discount
        templateCart.status = statusOrder.ordered
        templateCart.total = 0.0

        fetch(generalURL + '/cart', {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(templateCart)
        })
    }

    if (!medicineslist) return (<div>No Record Found</div>)

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={'/login'}>
                        Ehealthcare
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/user/medicines'}>
                                    Medicines
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/user/cart'}>
                                    Cart
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/user/orders'}>
                                    Orders
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/user/profile'}>
                                    Profile
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <Link className="navbar-brand" to={'/logout'}>
                        Log out
                    </Link>
                </div>
            </nav>

            <div className="container">
                <div className="auth-wrapper-all">
                    <div className="auth-inner-all">
                        <h2> Medicines </h2>

                        <div className="flex-row">
                            <div className="flex-col">
                                <input id="search" className="p-2 font-lg shadow border border-block" type="text" placeholder="Search by uses.." onChange={handleChange} />
                                <button type="button" className="btn btn-outline-primary" onClick={getuses}> Search </button>
                            </div>
                            <div className="flex-col">
                                <input id="search" className="p-2 font-lg shadow border border-block" type="text" placeholder="Search by disease.." onChange={handleChange} />
                                <button type="button" className="btn btn-primary" onClick={getdisease}>
                                    <i className="fas fa-search">Search</i>
                                </button>
                            </div>
                            <div className="flex-col">
                                <button type="button" className="btn btn-primary" onClick={getmedicines}>
                                    <i className="fas fa-search"> Reresh search </i>
                                </button>
                            </div>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Medicine</th>
                                    <th>Company</th>
                                    <th>Price</th>
                                    <th>Uses</th>
                                    <th>Disease</th>
                                    <th>Discount</th>
                                    <th>Add items</th>
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
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MedicinesListFunction;