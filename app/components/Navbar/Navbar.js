'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import { navLinks } from '../../constants'
import './Navbar.scss'
import Button from '../Button/Button'
import { FaWhatsapp } from "react-icons/fa6";
import { GiHamburger } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import TornEdge from '../TornEdge/TornEdge';

function Navbar() {
  const [isActive, setIsActive] = useState('Home');

  // Tracks whether the small-screen dropdown menu is open or closed.
  // false = closed (default), true = open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Flips the menu open/closed. Called when the hamburger/close icon is clicked.
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  // Runs when a nav link is clicked: marks it active AND closes the mobile
  // menu, so picking a link doesn't leave the dropdown open behind it.
  const handleLinkClick = (linkName) => {
    setIsActive(linkName);
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className='container'>
        <Image
          src="/images/logo.png"
          width={60}
          height={70}
          alt="Logo"
        />

        {/* Desktop nav links (hidden on small screens via CSS) */}
        <ul className='nav-links'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.id}`}
                onClick={() => handleLinkClick(link.name)}
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
            icon={<FaWhatsapp color='#C9A24A' size={25} />}
            color='#C9A24A'
          />
        </div>

        {/* Icon swaps between hamburger and close (X) based on menu state */}
        {isMenuOpen ? (
          <IoClose
            size={28}
            className='hamburger-icon'
            onClick={toggleMenu}
          />
        ) : (
          <GiHamburger
            size={25}
            className='hamburger-icon'
            onClick={toggleMenu}
          />
        )}

        {/* Mobile dropdown menu — only rendered/animated open when isMenuOpen is true.
            The 'open' class (added conditionally) is what triggers the slide/fade in CSS. */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={`#${link.id}`}
                  onClick={() => handleLinkClick(link.name)}
                  className={isActive === link.name ? 'active' : ''}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <Button
            title='Order on WhatsApp'
            icon={<FaWhatsapp color='#C9A24A' size={25} />}
            color='#C9A24A'
          />
        </div>
      </nav>
      <TornEdge color='var(--color-background-dark)' />
    </header>
  )
}

export default Navbar