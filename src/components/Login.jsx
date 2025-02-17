import React, { useState } from "react";
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Login.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

// What's in response and what's in result... READ !!!

function Login() {
  const [loginFormData, setLoginFormData] = useState({
    userName: "",
    password: "",
    email: "",
  });

  // handle input change
  const handleChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(loginFormData),
      });
      const result = await response.json();
      if (response.ok) {
        console.log("Success: ", result.message);
        console.log(response);
        navigate("/dash-board");
      } else {
        console.log(result.message + "messageeee");
        console.log("Unexpected Error:", response.status);
      }
    } catch (error) {
      console.log("Error ", error);
    }

    console.log("Form Data:", loginFormData);

    setLoginFormData({
      userName: "", // or email both
      email: "",
      password: "",
    });
  };

  return (
    <div className="loginBox">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2>Login </h2>
        <TextField
          size="small"
          name="userName"
          label="Username, email"
          value={loginFormData.userName}
          onChange={handleChange}
        />
        <TextField
          size="small"
          name="password"
          label="Password"
          type="password"
          value={loginFormData.password}
          onChange={handleChange}
        />

        <Button variant="contained" type="submit">
          Login
        </Button>

        {/* <TextField size="small" id="outlined" name="email" label="Email" type="email"/> */}
      </form>
    </div>
  );
}

export default Login;
