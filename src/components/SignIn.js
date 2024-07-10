import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { TextField, Button, CircularProgress, Typography, Card, CardContent } from '@mui/material';
import axios from "axios";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/login", formData);
      console.log(response, "res");
      if (response && response.data) {
        const token = response.data.token;
        const userEmail = response.data.user;
        const userRole = response.data.role;
        localStorage.setItem("token", token);
        localStorage.setItem("useremail", userEmail);
        localStorage.setItem("userrole", userRole);
        console.log("Successfully Log IN");
        // Redirect to the dashboard after successful login
        Navigate('/dashboard');
      } else {
        console.error("Invalid response:", response);
      }
    } catch (error) {
      console.log(error,"Error is Occured");
    }
  };


  return (
    <Card variant="outlined" style={{ width: '100%', marginTop:'50px', maxWidth: 400, margin: '0 auto', padding: '1rem' }}>
      <CardContent>
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <Typography variant="h5">Sign In</Typography>
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            type="email"
            name="email"
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '1rem' }}
          >
           SIGN IN
          </Button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Link to="/createuser">Create User</Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignIn;
