import React, { Fragment, useState } from "react";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { signUp, logIn, logOut } from "../redux/firebaseSlice";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleForm = (event) => {
    console.log("signUp");
    event.preventDefault();
    if (password === confirmPassword) {
      dispatch(signUp({ email, password }));
      alert("you are successfully sign up");
    } else {
      alert("please enter password and confirm password same");
    }
  };
  return (
    <Fragment>
      <Header />
      <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
        <h2>Sign Up</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleForm}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        {/* <p>
          Have an account? <Link to="/login">Login</Link>
        </p> */}
      </div>
    </Fragment>
  );
}

export default SignUp;
