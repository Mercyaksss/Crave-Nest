import React from 'react'
import Image from 'next/image'
import './About.scss'
import { PiChefHatBold, PiTrayLight, PiSmileyLight, PiSealCheckLight } from "react-icons/pi";
import { GiWhisk } from "react-icons/gi";
import { GoHeart } from "react-icons/go";
import TornEdge from '@/app/components/TornEdge/TornEdge';
import TornEdgeTop from '@/app/components/TornEdge/TornEdgeTop';

function About() {
  return (
    <section className='about container' id='about'>
        {/* left */}
        <div className='about-left'>
            <div className='about-left-image'>
                <Image
                    src='/images/meatpieimage.png'
                    fill
                    alt='meat-pie Image'
                />
            </div>
            <div className='about-text'>
                <PiChefHatBold size={40} color='var(--color-accent)'/>
                <span className='script'>About Us</span>
                <p>Baked<br/> from the <br/> heart. <GoHeart className='heart-doodle' color='var(--color-accent)'/></p>
            </div>
        </div>

        {/* right */}
        <div className='about-right'>
            <span className='script'>About Us</span>
            <h2>More than just food, <br/> it's an <span>experience.</span></h2>
            <p>At Crave Nest, we create freshly baked goods and delicious meals that bring people together. Whether it's a small treat or a big celebration, we deliver quality, taste, and care in every bite.</p>

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

            <GiWhisk className='about-doodle' strokeWidth={0.2}/>
        </div>
        <TornEdgeTop color='var(--color-secondary)'/>
        <TornEdge color='var(--color-secondary)'/>
        {/* <TornEdge color='red'/> */}


    </section>
  )
}

export default About