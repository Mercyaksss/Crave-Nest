'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import { navLinks } from '../../constants'
import './Navbar.scss'
import Button from '../Button/Button'
import { FaWhatsapp } from "react-icons/fa6";
import { GiHamburger } from "react-icons/gi";
import TornEdge from '../TornEdge/TornEdge';

function Navbar() {
  const [isActive, setIsActive] = useState('Home');

  return (
    <header >
        <nav className='container'>
            <Image 
                src="/images/logo.png" 
                width={60} 
                height={70} 
                alt="Logo"
            />

            <ul>
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a 
                            href={`#${link.id}`}
                            onClick={() => setIsActive(link.name)}
                            className={isActive === link.name ? 'active' : ''}
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>

            <div className='nav-cta-btn'>
                <Button
                    title='Order on WhatsApp'
                    icon={<FaWhatsapp color='#C9A24A' size={25}/>}
                    color='#C9A24A'
                />
                
            </div>
            

            <GiHamburger 
                size={25}
                className='hamburger-icon'
            />
        </nav>
        <TornEdge color='var(--color-background-dark)'/>
    </header>
  )
}

export default Navbar