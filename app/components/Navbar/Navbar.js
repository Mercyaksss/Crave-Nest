'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import { navLinks } from '../../constants'
import './Navbar.scss'
import Button from '../Button/Button'
import { FaWhatsapp } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import TornEdge from '../TornEdge/TornEdge';
import { CiMenuKebab } from "react-icons/ci";

// Height (px) of the fixed header — used to offset scroll position so a
// section's top isn't hidden underneath it. Keep this in sync with the
// `height: 80px` set on `header` in Navbar.scss.
const HEADER_OFFSET = 80;

// Site navbar: desktop inline links + CTA button, collapsing into a
// hamburger-triggered dropdown menu on small/medium screens.
function Navbar() {
  // Currently active/highlighted nav link (by name)
  const [isActive, setIsActive] = useState('Home');

  // Tracks whether the small-screen dropdown menu is open or closed.
  // false = closed (default), true = open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Flips the menu open/closed. Called when the hamburger/close icon is clicked.
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  // Runs when a nav link is clicked: marks it active, closes the mobile
  // menu (if open), and scrolls to the target section manually.
  //
  // We deliberately don't rely on the link's native `href="#id"` jump here.
  // Closing the mobile menu updates state (and therefore the DOM/CSS —
  // pointer-events, collapsing height) in the same click event, and on some
  // browsers that's enough to make the browser silently drop the pending
  // in-page navigation instead of completing it. Scrolling manually via
  // scrollIntoView-style math sidesteps that entirely, and also lets us
  // account for the fixed header height so the section isn't left hidden
  // underneath it.
  //
  // Each navLinks item stores the target as a full `href` string (e.g.
  // "#home"), not a separate `id` — so we strip the leading "#" to get the
  // element id to scroll to.
  const handleLinkClick = (event, link) => {
    event.preventDefault();

    setIsActive(link.name);
    setIsMenuOpen(false);

    const targetId = link.href.replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      const targetTop = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }
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
                href={link.href}
                onClick={(event) => handleLinkClick(event, link)}
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
          <CiMenuKebab
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
                  href={link.href}
                  onClick={(event) => handleLinkClick(event, link)}
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
            href="https://wa.me/2349078006689"
          />
        </div>
      </nav>
      <TornEdge color='var(--color-background-dark)' />
    </header>
  )
}

export default Navbar