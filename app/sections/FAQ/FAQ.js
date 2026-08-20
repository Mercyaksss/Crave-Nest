'use client'

import React, { useState } from 'react'
import { faqItems } from '@/app/constants'
import './FAQ.scss'
import { FaPlus, FaMinus } from 'react-icons/fa6'

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(0)

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
                            <button
                                className='faq-question'
                                onClick={() => toggle(index)}
                                aria-expanded={isOpen}
                            >
                                <span>{item.question}</span>
                                {isOpen ? <FaMinus /> : <FaPlus />}
                            </button>

                            <div className='faq-answer'>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default FAQ