import React from 'react' ;
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";


function Vehicles() {


    const [allvehicles, set_allvehicles] = useState([])
    const {companyId} = useParams()
    let num=1
    const baseURL = "http://127.0.0.1:5000/clients/"+companyId
    useEffect(() => {
        const getAllVehicles = async () => {
            await axios.get(baseURL)
                .then((response) => {
                    set_allvehicles(response.data)
                });
        }
        getAllVehicles()
    }, []);


    return (
        <table className="charging-cars-table">
            <thead>
            <tr>
                <th>Serial number</th>
                <th>Plate Number</th>
                <th>Owner</th>
                <th>Battery State</th>
                <th>Charging Activity</th>
                <th>Company Id</th>
            </tr>
            </thead>
            <tbody>
            {allvehicles.map((x)=><tr>
                <td>{num++}</td>
                <td>
                    {x.plate_number}
                </td>
                <td>
                    {x.owner}
                </td>
                <td>
                    {x.batterystate}
                </td>
                <td>
                    {<button>Stop Charging</button>}
                </td>
                <td>
                    {x.company_id}
                </td>
            </tr>)}
            </tbody>
        </table>
    );
}

export default Vehicles;
