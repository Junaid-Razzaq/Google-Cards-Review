import React, { useState } from 'react';
import { useCreateUserMutation } from '../redux/reducers/apiSlice'; 
import { TextField, Button, Typography, CircularProgress, Card, CardContent } from '@mui/material';

const CreateUser = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '',phoneNumber:'', role:'', email: '', password: '' });
  const [createUser, { isLoading, error }] = useCreateUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        role: formData.role,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
      };
      await createUser(userData).unwrap();
      // Handle success (optional)
    } catch (err) {
      // Handle error
      console.error('Failed to create user:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
      <>
      <Typography sx={{textAlign:'center',fontSize:'30px', marginTop:'10px',marginBottom:'10px'}}>Create User</Typography>
    <Card variant="outlined" style={{ marginTop:'100px', borderRadius:'10px' ,width: '100%', maxWidth: 500, margin: '0 auto', padding: '1rem' }}>
    <CardContent>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="firstName"
          label="First Name"
          variant="outlined"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          type="text"
          name="lastName"
          label="Last Name"
          variant="outlined"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          type="text"
          name="phonenumber"
          label="Phone Number"
          variant="outlined"
          value={formData.phoneNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
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
          disabled={isLoading}
          fullWidth
          style={{ marginTop: '1rem' }}
        >
          {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Create User'}
        </Button>
        {error && <Typography color="error">Error: {error.message}</Typography>}
      </form>
    </CardContent>
  </Card>
  </>
  );
};

export default CreateUser;
