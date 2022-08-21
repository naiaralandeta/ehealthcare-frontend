import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Moment from 'moment';

function Cart() {

    Moment.locale('en');
    const user = useLocation();
    const [ordersdata, setordersdata] = useState([])
    const [quantity, setquantity] = useState([])
    const generalURL = '/api/user'

    const total = 0.0

    useEffect(() => {
        getorderdata()
    }, [])

    const getorderdata = () => {

        fetch(generalURL + '/pending-orders?userId=' + user.state.id, { method: 'GET' })
            .then(response => response.json())
            .then(
                (result) => {
                    setordersdata(result)
                },
                (error) => {
                    setordersdata(null)
                }
            )
    }

    const onLoad = event => {
        ordersdata.forEach(order => {
            total += order.total
        });
    }

    const onChange = event => {
        setquantity(event.target.value);
    };

    const updateQuantity = (data) => {
        fetch(generalURL + '/cart?cartId=' + data.id + '&quantity=' + quantity, { method: 'PUT' })
    }

    const deletemedicine = (id) => {
        fetch(generalURL + '/cart?cartId=' + id , { method: 'DELETE' })
    }

    const checkout = (data) => {
        var checkouttotal = 0.0
        data.forEach(order => {
            checkouttotal += order.total
        });

        fetch(generalURL + '/checkout?userId=' + data[0].owner + '&total=' + checkouttotal , { 
            method: 'POST', headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
     })
    }

    if (!ordersdata) return (
        <div>
            <h2> Cart </h2>
            <label>No Records Found</label>
        </div>)

    return (
        <div>
            <h2> Cart </h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Reference</th>
                        <th>Medicines</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Date</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {ordersdata.map(order => (
                        <tr key={order.id}>
                            <td> {order.id} </td>
                            <td> {order.medname} </td>
                            <td> {order.quantity}</td>
                            <td> {order.status} </td>
                            <td> {order.total} </td>
                            <td> {Moment(order.date).format("MM-D-YYYY")}</td>
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
                                    <button onClick={() => updateQuantity(order)}>Update</button>
                                </div>
                            </td>
                            <td>
                                <button type="submit" className="btn btn-primary" onClick={() => deletemedicine(order.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <label onLoad={() => onLoad()}>Total = {total} </label>
            </div>
            <div>
            <button type="submit" className="btn btn-primary" onClick={() => checkout(ordersdata)}>Checkout</button>
            </div>
        </div>
    );
}


export default Cart;