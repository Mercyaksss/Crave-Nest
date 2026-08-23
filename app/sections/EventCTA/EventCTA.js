import React from 'react'
import Button from '@/app/components/Button/Button'
import { MdEditCalendar } from "react-icons/md"
import { FaWhatsapp } from "react-icons/fa6"
import { contactInfo } from '@/app/constants'
import './EventCTA.scss'
import TornEdge from '@/app/components/TornEdge/TornEdge'

function EventCTA() {
  return (
        <section className='event-cta container'>
                <div className='event-cta-info'>
                    <span className='event-cta-icon'>
                        <MdEditCalendar />
                    </span>

                    <div>
                        <h3>Planning an event?</h3>
                        <p>Let us handle the food while you enjoy the moment.</p>
                    </div>
                </div>

                <Button
                    title='Order on WhatsApp'
                    href={contactInfo.whatsappLink}
                    icon={<FaWhatsapp color='var(--color-accent)' size={20}/>}
                    color='var(--color-accent)'
                    background='var(--color-background-dark)'
                />
        <TornEdge color='var(--color-secondary)'/>        
        </section>
  )
}

export default EventCTA