'use client';

import React from 'react'
import Link from 'next/link'
import { FaInstagram, FaTiktok, FaWhatsapp, FaPhone, FaEnvelope, FaLocationDot, FaClock } from "react-icons/fa6"
import { brand, navLinks, menuItems, contactInfo, socialLinks, businessInfo, businessHours } from '@/app/constants'
import { useScrollReveal } from '@/app/hooks/useScrollReveal'
import './Footer.scss'
import Image from 'next/image'

const socialIcons = {
    Instagram: FaInstagram,
    TikTok: FaTiktok,
}

export default function Footer() {
  // Each of the four footer-top columns (brand, quick links, menu links,
  // contact) fades + slides up as its own block, followed by the
  // copyright line — all in the same stagger sequence since they're
  // matched in document order.
  const footerRef = useScrollReveal({
    targetSelector: '.footer-top > *, .footer-bottom',
    stagger: 0.1,
    y: 24,
  });

  return (
    <footer className='footer' ref={footerRef}>
        <div className='footer-top container'>

            <div className='footer-brand'>
                <div className='footer-logo'>
                    <Image
                        src='/images/logo.png'
                        width={50}
                        height={70}
                        alt='logo'
                    />
                    <div>
                        <h3>{brand.name}</h3>
                        <span>Baking &amp; Catering</span>
                    </div>
                </div>

                <p>{businessInfo.description}</p>

                <div className='footer-socials'>
                    <a href={contactInfo.whatsappLink} target='_blank' rel='noopener noreferrer' aria-label='WhatsApp'>
                        <FaWhatsapp />
                    </a>
                    {socialLinks.map((social) => {
                        const Icon = socialIcons[social.name]
                        if (!Icon) return null
                        return (
                            <a key={social.name} href={social.url} target='_blank' rel='noopener noreferrer' aria-label={social.name}>
                                <Icon />
                            </a>
                        )
                    })}
                </div>
            </div>

            <div className='footer-links'>
                <h4>Quick Links</h4>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='footer-links'>
                <h4>Our Menu</h4>
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <Link href={`#${item.id}`}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='footer-contact'>
                <h4>Contact Us</h4>
                <ul>
                    <li>
                        <FaPhone />
                        <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                    </li>
                    <li>
                        <FaEnvelope />
                        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                    </li>
                    <li>
                        <FaLocationDot />
                        <span>{businessInfo.locations.join(' & ')}, {businessInfo.country}</span>
                    </li>
                    <li>
                        <FaClock />
                        <span>{businessHours.enquiries.label}: {businessHours.enquiries.hours}</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className='footer-bottom'>
            <p>&copy; {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
        </div>
    </footer>
  )
}