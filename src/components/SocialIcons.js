// SocialIcons.js

import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function SocialIcons() {
    return (
        <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
        </div>
    );
}

export default SocialIcons;
