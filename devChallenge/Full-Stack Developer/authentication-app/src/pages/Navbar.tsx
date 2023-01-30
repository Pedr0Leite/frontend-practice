import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';


export function Navbar() {
    return (
    <div className="login-div">
      <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/personalinfo">Personal Info</Link></li>
        </ul>
    </div>
      )
  }  