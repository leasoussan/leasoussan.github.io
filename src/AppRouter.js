import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from "./component/Homepage.js";
import Robots from "./component/PastWork/memoryGame/Robots.js";
import PastWork from "./component/PastWork/Pastwork.js";


const Approuter = () => {

    return (
        <Router>
             <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/past_work" element={<PastWork />} />
        <Route path="/memory_game" element={<Robots />} />
        <Route path="/resume"/>

      </Routes>
        </Router>

    )

};

export default Approuter;