import React, { useState } from 'react';
import { MenMenuItems, WomenMenuItems } from '../MenuItems/MenuItems';
import { Link , Redirect} from 'react-router-dom';
import { Menu, MenuItem, Button} from '@material-ui/core';

export function MenDropDown() {
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
            {MenMenuItems.map((item, index) => {
            return (
                <MenuItem key={index} onClick={handleClose} component = {Link} to = {`/products/cat/${item.category}`}>{item.title}</MenuItem>

            );
            })}
        </Menu>
    </>
  );
}

export function WomenDropDown() {
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
           Women
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
           {WomenMenuItems.map((item, index) => {
           return (
               <MenuItem key={index} onClick={handleClose} component = {Link} to = {`/products/cat/${item.category}`}>{item.title}</MenuItem>
           );
           })}
       </Menu>
   </>
 );
}
