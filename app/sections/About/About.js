import React from 'react'
import Image from 'next/image'
import './About.scss'
import { PiChefHatBold } from "react-icons/pi";
import TornEdge from '@/app/components/TornEdge/TornEdge';

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
                {/* <PiChefHatBold size={70} color='#C9A24A'/> */}
                <h2 className='script'>About Us</h2>
                <p>Baked<br/> from the <br/> heart</p>
            </div>
        </div>

        {/* right */}
        <div className='about-right'>
            <span className='script'>About Us</span>
            <h2>More than just food, <br/> it's an <span>experience.</span></h2>
            <p>At Crave Nest, we create delightful backed goods and catering services that brings people together. We balieve in the perfecr mix of taste, hygiene, and love in every bite - made for every table.</p>
        </div>

        <TornEdge color='var(--color-background-dark)'/>
    </section>
  )
}

export default About
