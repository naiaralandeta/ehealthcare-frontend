import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Moment from 'moment';

function Orders() {

    Moment.locale('en');
    const user = useLocation();
    const [ordersdata, setordersdata] = useState([])
    const generalURL = '/api/user'

    useEffect(() => {
        getbankdata()
    }, [])

    const getbankdata = () => {

        fetch(generalURL + '/orders?userId=' + user.state.id, { method: 'GET' })
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

    if (!ordersdata) return (
        <div>
            <h2> Orders </h2>
            <label>No Records Found</label>
        </div>)

    return (
        <div>
            <h2> Orders </h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Reference</th>
                        <th>Medicines (amount)</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {ordersdata.map(order => (
                        <tr key={order.id}>
                            <td> {order.id} </td>
                            <td> {order.medicine.map(med => (
                                <ul> {med.name} ({med.quantity})  </ul>
                            ))}</td>
                            <td> {order.status} </td>
                            <td> {order.total} </td>
                            <td> {Moment(order.date).format("MM-D-YYYY")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default Orders;