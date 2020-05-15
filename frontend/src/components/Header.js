import React from 'react';

import './Header.css';

import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';

export default function Header() {
    return (
        <header id="main-header">
            <div className="header-content">
                <img src={logo} alt="InstaClone" />
                <img src={camera} alt="Send Post" />
            </div>
        </header>
    );
}
