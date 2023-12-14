// Footer.js

import React from 'react';
import './Styles/Footer.css'; // Import the CSS file
import SocialIcons from './SocialIcons';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2023 Muntaha</p>
            <p>Address, City, Country</p>
            {/* Add additional content or links as needed */}
            <SocialIcons />
        </footer>
    );
}

export default Footer;
