import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => (
  <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-bold tracking-tight text-indigo-800">TRuTribe</Link>
      <div className="space-x-6 text-sm">
        <Link to="/about">About</Link>
        <Link to="/capabilities">Capabilities</Link>
        <Link to="/contract">Contract</Link>
        <Link to="/impact">Impact</Link>
        <Link to="/admin" className="text-red-600">Admin</Link>
      </div>
    </div>
  </nav>
);