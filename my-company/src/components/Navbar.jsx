import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', margin: 0, padding: 0, justifyContent: 'center' }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
