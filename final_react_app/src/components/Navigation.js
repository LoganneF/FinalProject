import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import '../App.css'

const Navigation = () => {
    return (
      
        <AppBar position="static">
         <div>
         <ul>
         <li><NavLink to="/main">Profile</NavLink></li>
         <li><NavLink to="/keyboard">Keyboard</NavLink></li>
         <li><NavLink to="/timer">Timer</NavLink></li>
         </ul>
         </div>
        </ AppBar >
      
    );
}
 
export default Navigation;