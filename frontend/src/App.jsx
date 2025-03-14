import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ResumeBuilder from "./pages/ResumeBuilder";
import ResumePage from "./pages/ResumePage";
import TemplatesPage from "./pages/TemplatesPage";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AuthRoute from './components/AuthRoute';
import Header from "./pages/Header";
import TutStructure from "./pages/TutStructure";
import TutSummary from "./pages/TutSummary";
import TutATS from "./pages/TutATS";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
      <Header/>
      <Routes>
        <Route path="/" element={<AuthRoute />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/resume-builder" element={<ResumeBuilder />} />
        <Route path="/resume/:resumeId" element={<ResumePage />} /> {/* Fix: Add dynamic route for ResumePage */}
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tut-struc" element={<TutStructure/>}/>
        <Route path="/tut-summary" element={<TutSummary/>}/>
        <Route path="/tut-ats" element={<TutATS/>}/>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
