'use client'

import React, { useState } from 'react'
import { faqItems } from '@/app/constants'
import './FAQ.scss'
import { FaPlus, FaMinus } from 'react-icons/fa6'
import TornEdge from '@/app/components/TornEdge/TornEdge'

// FAQ section: accordion list of question/answer pairs. Only one item can
// be open at a time — opening a new one closes whichever was open before.
// `faqItems` (question/answer pairs) lives in constants so content can be
// edited without touching this file.
function FAQ() {
    // Index of the currently open FAQ item. `null` means none are open.
    // Starts at 0 so the first question is expanded by default.
    const [activeIndex, setActiveIndex] = useState(0)

    // Opens the clicked item, or closes it if it's already open
    // (accordion behavior — clicking the open item collapses it).
    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className='faq container' id='faq'>
            <span className='script'>FAQ</span>
            <h2>Got <span>questions?</span> <br/> We&apos;ve got answers.</h2>

            <div className='faq-list'>
                {faqItems.map((item, index) => {
                    const isOpen = activeIndex === index
                    return (
                        <div key={item.question} className={`faq-item ${isOpen ? 'open' : ''}`}>
                            {/* Entire question row is the toggle button;
                                aria-expanded keeps it accessible for
                                screen readers */}
                            <button
                                className='faq-question'
                                onClick={() => toggle(index)}
                                aria-expanded={isOpen}
                            >
                                <span>{item.question}</span>
                                {/* Icon swaps between + (closed) and − (open) */}
                                {isOpen ? <FaMinus /> : <FaPlus />}
                            </button>

                            {/* Answer is always rendered (not conditionally
                                mounted) so the open/close transition in
                                FAQ.scss has something to animate between */}
                            <div className='faq-answer'>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Decorative torn-paper edge along the bottom of the section */}
            <TornEdge color='var(--color-background-dark)'/>
            
        </section>
    )
}

export default FAQ