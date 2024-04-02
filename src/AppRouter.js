import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from "./component/Homepage.js";
import Robots from "./component/PastWork/memoryGame/Robots.js";
import KiwepProject from "./component/PastWork/projects/kiwep/kiwep_project.js";
import LandfProject from "./component/PastWork/projects/landf/landf_project.js";
import VisualeyesProject from "./component/PastWork/projects/visualeyes/visualeyes_project.js";
import Navbar from "./component/Navbar.js";

const Approuter = () => {

    return (
        <Router>
            <Navbar />
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/kiwep_projet_detail" element={<KiwepProject />} />
        <Route path="/landf_projet_detail" element={<LandfProject />} />
        <Route path="/visualeyes_projet_detail" element={<VisualeyesProject />} />
        <Route path="/memory_game" element={<Robots />} />
        {/* <Route path="/resume"/> */}

      </Routes>
        </Router>

    )

};

export default Approuter;