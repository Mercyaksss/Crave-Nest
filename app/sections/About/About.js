'use client';

import React from 'react'
import Image from 'next/image'
import { GiWhisk } from "react-icons/gi";
import { GoHeart } from "react-icons/go";
import TornEdge from '@/app/components/TornEdge/TornEdge';
import TornEdgeTop from '@/app/components/TornEdge/TornEdgeTop';
import { PiChefHatBold, PiTrayLight, PiSmileyLight, PiSealCheckLight } from "react-icons/pi";
import { useScrollReveal } from '@/app/hooks/useScrollReveal';
import './About.scss'

// About section: image + overlapping caption card on the left,
// heading/copy/stats on the right. TornEdge/TornEdgeTop render the
// torn-paper strips along the section's top and bottom edges.
function About() {
  // Scroll-triggered entrance: the main photo, the overlapping caption
  // card, and each direct child of the right column (label, heading,
  // paragraph, stats block, doodle icon) fade + slide up one after another
  // as the section enters the viewport. Because querySelectorAll returns
  // matches in document order regardless of which part of the selector
  // list they came from, this naturally staggers left-to-right, top-to-
  // bottom — no manual ordering needed.
  const aboutRef = useScrollReveal({
    targetSelector: '.about-left-image, .about-text, .about-right > *',
    stagger: 0.12,
    y: 30,
  });

  return (
    <section className='about container' id='about' ref={aboutRef}>

        {/* Left column: main photo with a smaller caption card
            overlapping its bottom-right corner (positioned in About.scss) */}
        <div className='about-left'>
            <div className='about-left-image'>
                <Image
                    src='/images/meatpieImage.png'
                    fill
                    sizes="(max-width: 560px) 90vw, (max-width: 900px) 85vw, 33vw"
                    alt='meat-pie Image'
                />
            </div>

            {/* Overlapping caption card: chef-hat icon, "About Us" label,
                and a short script-style line ("Baked from the heart.") */}
            <div className='about-text'>
                <PiChefHatBold size={40} color='var(--color-accent)'/>
                <span className='script'>About Us</span>
                <p>Baked<br/> from the <br/> heart. <GoHeart className='heart-doodle' color='var(--color-accent)'/></p>
            </div>
        </div>

        {/* Right column: section label, heading, description, and the
            trio of stat callouts below */}
        <div className='about-right'>
            <span className='script'>About Us</span>
            <h2>More than just food, <br/> it's an <span>experience.</span></h2>
            <p>At Crave Nest, we create freshly baked goods and delicious meals that bring people together. Whether it's a small treat or a big celebration, we deliver quality, taste, and care in every bite.</p>

            {/* Quick-glance stats, each pairing an icon with a
                headline value (e.g. "50+") and a short label */}
            <div className='about-stats'>
                <div className='stat'>
                    <PiTrayLight size={30}/>
                    <div>
                        <h3>50+</h3>
                        <span>Events Catered</span>
                    </div>
                </div>
                <div className='stat'>
                    <PiSmileyLight size={30}/>
                    <div>
                        <h3>100%</h3>
                        <span>Happy Clients</span>
                    </div>
                </div>
                <div className='stat'>
                    <PiSealCheckLight size={30}/>
                    <div>
                        <h3>Always</h3>
                        <span>Fresh & Quality</span>
                    </div>
                </div>
            </div>

            {/* Faint decorative whisk icon in the background (styled via
                .about-doodle in About.scss, hidden on smaller screens) */}
            <GiWhisk className='about-doodle' strokeWidth={0.2}/>
        </div>

        {/* Decorative torn-paper edges along the top and bottom of the section */}
        <TornEdgeTop color='var(--color-secondary)'/>
        <TornEdge color='var(--color-secondary)'/>
    </section>
  )
}

export default About