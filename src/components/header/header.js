import Logo from './assets/Logo.svg';

import React, { Component } from 'react';

import './App.css';

export default function Header(){
    return(
        <header>
            <div className="logo">
                <img src={Logo} />
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Serviços</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}