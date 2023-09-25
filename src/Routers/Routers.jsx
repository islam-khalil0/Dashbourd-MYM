import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "../layout/Navbar/index";
import EmployeesAndTraining from "../pages/EmployessAndTranings";
import OurBlogs from "../pages/OurBlogs";
import Projects from "../pages/Projects";
import Positions from "../pages/Positions";
import ClientsFeedback from "../pages/ClientsFeedback";
import Certificate from "../pages/Certificate";

const Routers = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<EmployeesAndTraining />} />
          <Route path="/ourBlogs" element={<OurBlogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/clients-feedback" element={<ClientsFeedback />} />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
