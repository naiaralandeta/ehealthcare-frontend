import React, { useState, useEffect } from "react";

const MedicinesListFunction = () => {

    const [medicineslist, setmedicines] = useState([])
    const medicinesURL = '/api/admin/medicines';

    const [search, setsearch] = useState([])

    const handleChange = event => {
        setsearch(event.target.value);
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

        fetch('/api/user/uses?uses=' + search)
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

        fetch('/api/user/disease?disease=' + search)
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
                        <input id="search" class="p-2 font-lg shadow border border-block" type="text" placeholder="Search uses.." onChange={handleChange}/>
                        <button type="button" class="btn btn-primary" onClick={getuses}>
                            <i class="fas fa-search">Search</i>
                        </button>
                    </th>
                    <th>Disease
                        <input id="search" class="p-2 font-lg shadow border border-block" type="text" placeholder="Search disease.." onChange={handleChange}/>
                        <button type="button" class="btn btn-primary" onClick={getdisease}>
                            <i class="fas fa-search">Search</i>
                        </button>
                    </th>
                    <th>Discount</th>
                    <th>
                    <button type="button" class="btn btn-primary" onClick={getmedicines}>
                            <i class="fas fa-search"> Reresh search </i>
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {medicineslist.map(medicine => (
                    <tr key={medicine.name}>
                        <td> {medicine.name} </td>
                        <td> {medicine.company} </td>
                        <td> {medicine.price} </td>
                        <td> {medicine.uses} </td>
                        <td> {medicine.disease} </td>
                        <td> {medicine.discount} </td>
                        <td>
                            <button type="submit" className="btn btn-primary">Add</button>
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