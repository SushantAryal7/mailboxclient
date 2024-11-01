import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/SignUp";

import React from "react";
import EmailComposer from "./pages/Home";
// import About from './About';
// import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmailComposer />} />
        <Route path="/signup" element={<Signup />} />

        {/* <Route path="*" element={<NotFound />} /> 404 Page */}
      </Routes>
    </Router>
  );
}

export default App;
