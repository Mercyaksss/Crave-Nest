import Button from '@/app/components/Button/Button'
import React from 'react'
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { GiLindenLeaf } from "react-icons/gi";
import { GiDeliveryDrone } from "react-icons/gi";
import { GoHeart } from "react-icons/go";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import './Hero.scss'
import TornEdge from '@/app/components/TornEdge/TornEdge';
import Herobuttom from '@/app/components/Herobuttom/Herobuttom';
import TornEdgeTop from '@/app/components/TornEdge/TornEdgeTop';


function Hero() {
  return (
    <section id='home' className='hero-container'>
        <div className='hero container'>
            <div className='hero-left'>
                <span className='script'>
                    A little taste <br/>of Euphoria
                </span>

                <h1>Crave <span>Nest</span></h1>

                <p>Delicious bakes and exceptional catering for every occasion</p>

                <div className='hero-btns'>
                    <Button
                        title='Explore Menu'
                        icon={<FaArrowRightLong color='#000'/>}
                        color='#000'
                        background='#C9A24A'

                    />
                    
                    <Button
                        title='Order on WhatsApp'
                        icon={<FaWhatsapp color='#C9A24A' size={25}/>}
                        color='#fff'
                    />

                </div>
                
                <div className='hero-features'>
                    <Herobuttom
                        icon={<GiLindenLeaf color='#C9A24A' size={40}/>}
                        word1='Quality'
                        word2='Ingredients'
                    />
                    <Herobuttom
                        icon={<IoShieldCheckmarkOutline color='#C9A24A' size={40}/>}
                        word1='Hygienic'
                        word2='Preparation'
                    />
                    <Herobuttom
                        icon={<GiDeliveryDrone color='#C9A24A' size={40}/>}
                        word1='Timely'
                        word2='Delivery'
                    />
                    <Herobuttom
                        icon={<GoHeart color='#C9A24A' size={40}/>}
                        word1='Made'
                        word2='with Love'
                    />
                    
                </div>
            </div>

            <div className='hero-right'>
                <Image
                    src='/images/hero.png'
                    fill
                    alt='Hero Image'
                />
            </div>


        <TornEdge color='var(--color-background'/>
        </div>
        

    </section>
  )
}

export default Hero