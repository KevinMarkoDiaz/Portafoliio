import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { About } from "../components/About/About";
import { AboutIntro } from "../components/About/AboutIntro";
import { AboutWhatIDid } from "../components/About/AboutWhatIDid";
import { NextSkills } from "../components/About/NextSkills";
import { Contact } from "../components/Contact/Contact";
import { Home } from "../components/Home/Home";
import { Layout } from "../components/Layout/Layout";
import { Portfolio } from "../components/Portfolio/Portfolio";


export const PublicRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/who" element={<AboutIntro />} />
          <Route path="/about/what" element={<AboutWhatIDid />} />
          <Route path="/about/learning" element={<NextSkills />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  )
}