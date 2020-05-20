import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/keyboard">Keyboard</NavLink>
          <NavLink to="/schedule">Schedule</NavLink>
       </div>
    );
}
 
export default Navigation;