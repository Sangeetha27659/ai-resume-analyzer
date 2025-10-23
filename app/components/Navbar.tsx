// app/components/Navbar.tsx
import { Link } from "react-router";
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center p-4 shadow-md">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient">RESUMIND</p>
      </Link>

      <Link to="/upload" className="primary-button w-fit">
        Upload Resume
      </Link>
    </nav>
  );
};

export default Navbar;
