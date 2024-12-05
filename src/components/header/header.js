import Logo from '../../assets/logos/Logo.svg';

import React, { Component } from 'react';

import './header.css';

export default function Header() {
    return (
        <header className='header-container'>
          <nav className='header-container__nav'>
            <div>
                <a href="#">CURSOS</a>
            </div>

            <div>
                <a href="#">CONTATO</a>
            </div>

            <div>
                <a>
                 <img src={Logo} />
                </a>
            </div>

            <div>
                <a href="#">LOCAL</a>
            </div>

            <div>
                <a href="#">SERVIÇOS</a>
            </div>
          </nav>

          <div className='header-container__divisor'> 
          </div>
          
        </header>
    );
}

                
    