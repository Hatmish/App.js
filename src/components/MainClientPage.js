import { useNavigate} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import axios from "axios";
import _ClientsTable_Header from "./_ClientsTable_Header";


function MainClientPage(){
    let navigate = useNavigate()



const [clientstable, set_clientstable] = useState([])
const baseURL = "http://127.0.0.1:5000/clients"
useEffect(() => {
    const getClients= async () => {
        await axios.get(baseURL)
            .then((response) => {
                set_clientstable(response.data)
            });
    }
    getClients()
}, []);
let numId = 1


return (
    <div>
        <_ClientsTable_Header></_ClientsTable_Header>
        <table className="table-of-clients">
            <thead>
            <tr>
                <th>Point</th>
                <th>Company</th>
                <th>Vehicles</th>
                <th>Activity</th>
                <th>Inspect</th>
            </tr>
            </thead>
            <tbody>
            {clientstable.map((x)=><tr>
                <td>{numId++}</td>
                <td>
                    {x.company}
                </td>
                <td>
                    {x.vehicles}
                </td>
                <td>
                    {x.activity}
                </td>
                <td>
                <button
                    onClick={() => {
                    navigate(x.id)
                }}
                >
                Inspect {x.company} Clients
                </button>

                </td>
            </tr>)}
            </tbody>
        </table>
    </div>
        );
}

export default MainClientPage;

