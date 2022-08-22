import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainClientPage from './components/MainClientPage';
import _ClientsTable_Header from "./components/_ClientsTable_Header";
import Vehicles from './components/Vehicles';


function App() {


    return (
        <div className="App">

        <Router>
            <Routes>
                <Route path ="/clients" element={<MainClientPage/>} />
                <Route path ="/clients/:companyId" element={<Vehicles/>} />
                <Route path ="/header" element={<_ClientsTable_Header />} />

            </Routes>
        </Router>
        </div>
    );
}
export default App;


