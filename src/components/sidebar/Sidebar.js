import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import { IoSpeedometerOutline, IoCreateOutline, IoLogoDribbble } from "react-icons/io5";
import { CiLogin, CiShoppingTag, CiSettings } from "react-icons/ci";
import { MdOutlineTapAndPlay, MdLiveTv, MdOutlinePreview } from "react-icons/md";
import RateCards from './ratecards.avif'


const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
  }; 

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 300,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 300, boxSizing: 'border-box' },
      }}
    >
      <div style={{ padding: '20px' }}>
        <div style={{backgroundColor:'black',padding:'20px'}}>
        {/* <Typography variant="h4" style={{ fontSize: '35px', marginTop: '-5px', paddingBottom: '5px' }}> */}
          <img src={RateCards} alt='Ratelogo'/>
          </div>
        {/* </Typography> */}
        
        <List>
          <Typography style={{ color: '#696b5f', paddingBottom: '10px' }}>Navigation</Typography>
          <ListItem button component={Link} to="/dashboard">
            <ListItemText primary={<Typography style={{ fontSize: '20px', color: '#494a43' }}><span style={{ marginRight: '10px' }}><IoSpeedometerOutline /></span> Dashboard</Typography>} />
          </ListItem>

          <Typography style={{ color: '#696b5f', paddingBottom: '10px', paddingTop: '10px' }}>Authentication</Typography>
          <ListItem button component={Link} to="/">
            <ListItemText primary={<Typography style={{ fontSize: '20px', color: '#494a43' }}><span style={{ marginRight: '10px' }}><CiLogin /></span> Login</Typography>} />
          </ListItem>
          <ListItem button component={Link} to="/createuser">
            <ListItemText primary={<Typography style={{ fontSize: '20px', color: '#494a43' }}><span style={{ marginRight: '10px' }}><IoCreateOutline /></span> Register</Typography>} />
          </ListItem>

          <Typography style={{ color: '#696b5f', paddingBottom: '10px', paddingTop: '10px' }}>Utilities</Typography>
          <ListItem button component={Link} to="/dashboard">
            <ListItemText primary={<Typography style={{ fontSize: '20px', color: '#494a43' }}><span style={{ marginRight: '10px' }}><CiShoppingTag /></span> Tag list</Typography>} />
          </ListItem>
          <ListItem button component={Link} to="/dashboard">
            <ListItemText primary={<Typography style={{ fontSize: '20px', color: '#494a43' }}><span style={{ marginRight: '10px' }}><MdOutlineTapAndPlay /></span> Tap list</Typography>} />
          </ListItem>
          <ListItem button component={Link} to="/dashboard">
            <ListItemText primary={<Typography style={{ fontSize: '20px', color: '#494a43' }}><span style={{ marginRight: '10px' }}><MdLiveTv /></span> Live view</Typography>} />
          </ListItem>

          <Typography style={{ color: '#696b5f', paddingBottom: '10px', paddingTop: '10px' }}>Support</Typography>
          <ListItem button component={Link} to="/dashboard">
            <ListItemText primary={<Typography style={{ fontSize: '20px', color: '#494a43' }}><span style={{ marginRight: '10px' }}><MdOutlinePreview /></span> Reviews</Typography>} />
          </ListItem>
          <ListItem button component={Link} to="/dashboard">
            <ListItemText primary={<Typography style={{ fontSize: '20px', color: '#494a43' }}><span style={{ marginRight: '10px' }}><CiSettings /></span> Settings</Typography>} />
          </ListItem>
          <ListItem button component={Link} to="/dashboard">
            <ListItemText primary={<Typography style={{ fontSize: '20px', color: '#494a43' }}><span style={{ marginRight: '10px' }}><IoLogoDribbble /></span> Logs</Typography>} />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
