import React, { useState } from 'react';
import { MenuItems } from '../MenuItems/MenuItems';
import { Link } from 'react-router-dom';
import {Container, Menu, MenuItem, Button} from '@material-ui/core';

function DropDown() {
   const [anchorEl, setAnchorEl] = useState(null);

   const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

   const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
        <Button aria-controls="simple-menu" aria-haspopup="true" onMouseEnter={handleClick} >
            Men
        </Button>
        
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        //onMouseLeave={handleClose}
        //onMouseOutCapture={handleClose}
        //onMouseDown={handleClose}
        >
            {/* <MenuItem onClick={handleClose}><Link to="/"></Link>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            {MenuItems.map((item, index) => {
            return (
                <MenuItem key={index} onClick={handleClose}>{item.title}</MenuItem>
            );
            })}
        </Menu>
    </>
  );
}

export default DropDown;