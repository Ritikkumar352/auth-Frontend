import React, { useState } from "react";
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Login.css";
import { Button } from "@mui/material";

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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(loginFormData),
      });
      if (response.ok) {
        const result = await response.json();
        console.log("Success: ", result.message);
      } else if (response.status === 404) {
        const result = await response.json();
        console.log("Error:", result.message);
        alert(result.message, "from backend");
        alert("User not found");
      } else {
        const result = await response.json();
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
