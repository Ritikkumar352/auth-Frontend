import React, { useState } from "react";
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Register.css";
import { Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    userName: "",
    password: "",
    email: "",
  });

  const navigate=useNavigate();

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },  // changed c-> C
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const result = await response.json();
        console.log("Response", result);
        alert(result.message);
        throw new Error("Failed to register");
      }
      

      const result = await response.json();
      console.log("Response", result);

      if(response.ok){
        alert(`Welcome ${formData.name} !! Now Please Login.`)
        navigate("/login");
      }
      setFormData({
        name: "",
        lastName: "",
        userName: "",
        password: "",
        email: "",
      });
    } catch (error) {
      console.log("Error", error);
    }

    console.log("Form Data:", formData);
  };

  return (
    <div className="reg">
      <div className="box">
        <h2>Register</h2>
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            size="small"
            name="name"
            label="Name"
            onChange={handleChange}
            value={formData.name}
          />
          <TextField
            size="small"
            name="lastName"
            label="Last Name"
            onChange={handleChange}
            value={formData.lastName}
          />
          <TextField
            size="small"
            name="userName"
            label="UserName"
            onChange={handleChange}
            value={formData.userName}
          />
          <TextField
            size="small"
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            size="small"
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Button variant="contained" type={"submit"}>
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Register;
