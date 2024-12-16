// import React from "react";
// import "./SignIn.css";
// import signIn_pic from "../assets/signIn_pic.png"

// const SignIn = () => {
//   return (
//     <div className="sign-in-modal">
//       <div className="left-image-section">
//         <img
//           src={signIn_pic}
//           alt="Welcome"          
//           className="left-image"
//         />
//         <div className="welcome-text">Welcome</div>
//       </div>
//       <div className="sign-in-form">
//         <h2>Sign in</h2>
//         <div className="form-field">
//           <label>Email</label>
//           <input type="email" />
//         </div>
//         <div className="form-field">
//           <label>Password</label>
//           <input type="password" />
//         </div>
//         <button className="sign-in-button">Sign in</button>
//       </div>
//     </div>
//   );
// };

// export default SignIn;


import React, { useState } from "react";
import "./SignIn.css";
import signIn_pic from "../assets/signIn_pic.png";
import { Link } from "react-router-dom"; 

const SignIn = () => {
  // State to hold form input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userCredentials = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful, handle redirection or message
        alert("Login successful!");
        // For example, you can redirect to a dashboard page
        // window.location.href = "/dashboard";
      } else {
        // Login failed, show the error message
        setError(data.error);
      }
    } catch (err) {
      console.error("Error logging in:", err);
      setError("An error occurred, please try again.");
    }
  };

  return (
    <div className="sign-in-modal">
      <div className="left-image-section">
        <img src={signIn_pic} alt="Welcome" className="left-image" />
        <div className="welcome-text">Welcome</div>
      </div>
      <div className="sign-in-form">
        <h2>Sign in</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* <button type="submit" className="sign-in-button">
            Sign in
          </button> */}

          <Link to="/profilepage">
          <button type="submit" className="sign-in-button">
            Sign in
          </button>
            </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
