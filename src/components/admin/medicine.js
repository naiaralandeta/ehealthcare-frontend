import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Moment from 'moment';
import Modal from 'react-modal';

const AdminMedicinesListFunction = () => {

    Moment.locale('en');
    const generalURL = '/api/admin';
    const [medicineslist, setmedicines] = useState([]);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [search, setsearch] = useState([])

    const handleChange = event => {
        setsearch(event.target.value);
    };

    useEffect(() => {
        getmedicines()
    }, [])

    const getmedicines = () => {
        fetch(generalURL + '/medicines')
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

        fetch(generalURL + '/cart', {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    const deleteMedicine = (data) => {

        fetch(generalURL + '/delete?id=' + data.id, {
            method: 'DELETE'
        }).then(
            getmedicines()
        )
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetch(generalURL + '/update?id=', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        });
        closeModal()
    }

    const updateMedicine = () => {
        openModal()
    }

    if (!medicineslist) return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={'/api/login'}>
                        Ehealthcare
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/api/admin/cart'}>
                                    Cart
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/api/admin/orders'}>
                                    Orders
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <Link className="navbar-brand" to={'/api/logout'}>
                        Log out
                    </Link>
                </div>
            </nav>
            <div className="container">
                <div className="auth-wrapper-all">
                    <div className="auth-inner-all">
                        <label>No Records Found</label>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={'/api/login'}>
                        Ehealthcare
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/api/admin/cart'}>
                                    Reports
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/api/admin/orders'}>
                                    Orders
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <Link className="navbar-brand" to={'/api/logout'}>
                        Log out
                    </Link>
                </div>
            </nav>

            <div className="container">
                <div className="auth-wrapper-all">
                    <div className="auth-inner-all">
                        <h2> Medicines </h2>
                        <div className="d-grid">
                            <button onClick={() => addMedicine()}>Add medicine</button>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Reference</th>
                                    <th>Medicine</th>
                                    <th>Company</th>
                                    <th>Price</th>
                                    <th>Uses</th>
                                    <th>Disease</th>
                                    <th>Discount</th>
                                    <th>Expire date</th>
                                    <th>Quantity</th>
                                    <th></th>

                                </tr>
                            </thead>
                            <tbody>
                                {medicineslist.map(medicine => (
                                    <tr key={medicine.id}>
                                        <td>{medicine.id}</td>
                                        <td> {medicine.name} </td>
                                        <td> {medicine.company} </td>
                                        <td> {medicine.price} </td>
                                        <td> {medicine.uses} </td>
                                        <td> {medicine.disease} </td>
                                        <td> {medicine.discount} </td>
                                        <td> {Moment(medicine.expire).format("MM-D-YYYY")} </td>
                                        <td> {medicine.quantity} </td>
                                        <td>
                                            <div className="d-grid">
                                                <button onClick={updateMedicine}>Update</button>
                                            </div>
                                            <div className="d-grid">
                                                <button onClick={() => deleteMedicine(medicine)}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                                <form onSubmit={handleSubmit}>
                                    <h3>Update informartion</h3>
                                    <div className="mb-3">
                                        <label>Reference</label>
                                        <input
                                            name="id" value={medicineslist.id || ''}
                                            className="form-control"
                                            placeholder="Username"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>First name</label>
                                        <input
                                            type="text" name="firstname" value={ ''}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="First name"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Last name</label>
                                        <input type="text" name="lastname" value={ ''}
                                            onChange={handleChange}
                                            className="form-control" placeholder="Last name" />
                                    </div>
                                    <div className="mb-3">
                                        <label>Email address</label>
                                        <input
                                            type="email" name="email" value={ ''}
                                            className="form-control"
                                            placeholder="Enter email"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Password</label>
                                        <input
                                            type="text" name="password" value={ ''}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Enter password"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Date of birthday</label>
                                        <input
                                            type="date" name="dob" value={ ''}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="DOB"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Phone</label>
                                        <input
                                            type="text" name="phone" value={ ''}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Phone"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Address</label>
                                        <input
                                            type="text" name="address" value={ ''}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Address"
                                        />
                                    </div>
                                    <div className="flex-row">
                                        <div className="flex-col">
                                            <button type="submit" className="btn btn-primary">
                                                Update
                                            </button>
                                        </div>
                                        <div className="flex-col">
                                            <button className="btn btn-primary" onClick={closeModal}>
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminMedicinesListFunction;