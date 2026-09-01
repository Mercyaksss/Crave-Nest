'use client';

import React from 'react'
import Button from '@/app/components/Button/Button'
import { MdEditCalendar } from "react-icons/md"
import { FaWhatsapp } from "react-icons/fa6"
import { contactInfo } from '@/app/constants'
import { useScrollReveal } from '@/app/hooks/useScrollReveal'
import './EventCTA.scss'
import TornEdge from '@/app/components/TornEdge/TornEdge'

// Simple banner CTA prompting event/catering enquiries, with a single
// WhatsApp button. `contactInfo.whatsappLink` (from constants) keeps the
// number in one place so it doesn't need updating in multiple components.
function EventCTA() {
  // Small section, so a smaller slide distance (20px vs the 30-40px used
  // in larger sections) feels proportionate — icon, heading/description,
  // and the button each fade in with a slight stagger.
  const eventCtaRef = useScrollReveal({
    targetSelector: '.event-cta-icon, h3, p, .cta-btn',
    stagger: 0.1,
    y: 20,
  });

  return (
        <section className='event-cta container' ref={eventCtaRef}>
                {/* Icon + heading/description, on the left */}
                <div className='event-cta-info'>
                    <span className='event-cta-icon'>
                        <MdEditCalendar />
                    </span>

                    <div>
                        <h3>Planning an event?</h3>
                        <p>Let us handle the food while you enjoy the moment.</p>
                    </div>
                </div>

                {/* WhatsApp CTA, on the right (stacks below on small screens) */}
                <Button
                    title='Order on WhatsApp'
                    href={contactInfo.whatsappLink}
                    icon={<FaWhatsapp color='var(--color-accent)' size={20}/>}
                    color='var(--color-accent)'
                    background='var(--color-background-dark)'
                />

        {/* Decorative torn-paper edge along the bottom of the section */}
        <TornEdge color='var(--color-secondary)'/>        
        </section>
  )
}

export default EventCTA