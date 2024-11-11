import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";

import React, { useEffect, useState } from "react";
import EmailComposer from "./pages/Home";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import SendMail from "./pages/SendMail";
import GetEmail from "./pages/GetEmail";

// import About from './About';
// import NotFound from './NotFound';

function App() {
  const [user, setUser] = useState(false);
  // const navigate   = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (users) => {
      if (users) {
        localStorage.setItem("mailSender", JSON.stringify(users.email));
        setUser(users.uid);
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <EmailComposer /> : <Login />} />

        <Route path="/" element={<EmailComposer />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sendmail" element={<SendMail />} />
        <Route path="/getmail" element={<GetEmail />} />

        {/* <Route path="*" element={<NotFound />} /> 404 Page */}
      </Routes>
    </Router>
  );
}

export default App;
