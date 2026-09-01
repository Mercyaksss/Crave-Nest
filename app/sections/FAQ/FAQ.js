'use client'

import React, { useRef, useState } from 'react'
import { faqItems } from '@/app/constants'
import './FAQ.scss'
import { FaPlus, FaMinus } from 'react-icons/fa6'
import TornEdge from '@/app/components/TornEdge/TornEdge'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// FAQ section: accordion list of question/answer pairs. Only one item can
// be open at a time — opening a new one closes whichever was open before.
// `faqItems` (question/answer pairs) lives in constants so content can be
// edited without touching this file.
function FAQ() {
    const sectionRef = useRef(null)

    // Index of the currently open FAQ item. `null` means none are open.
    // Starts at 0 so the first question is expanded by default.
    const [activeIndex, setActiveIndex] = useState(0)

    // Opens the clicked item, or closes it if it's already open
    // (accordion behavior — clicking the open item collapses it).
    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    // Like Menu, this section doesn't use the shared useScrollReveal hook
    // for the question list — with 10 items spanning multiple screen
    // heights, a single stagger fired from one trigger point would mean
    // items far down the list are already fully visible before you scroll
    // to them. ScrollTrigger.batch() animates each question individually,
    // right as it enters the viewport.
    //
    // This only touches .faq-item's own opacity/position — it doesn't
    // conflict with the accordion open/close animation, which lives
    // entirely on .faq-answer's max-height/opacity (a different element,
    // see FAQ.scss).
    useGSAP(() => {
        // Section intro (label + heading) — small, non-repeating block,
        // so this uses a plain single-trigger stagger.
        gsap.from(['.script', 'h2'], {
            opacity: 0,
            y: 24,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
        });

        // Pre-hide all questions immediately, before the batch trigger is
        // even created — see the matching comment in Menu.js for why this
        // prevents a visible "snap down" flash right as each item scrolls
        // into view.
        gsap.set('.faq-item', { opacity: 0, y: 30 });

        ScrollTrigger.batch('.faq-item', {
            start: 'top 85%',
            once: true,
            onEnter: (batch) => {
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.12,
                    ease: 'power2.out',
                });
            },
        });
    }, { scope: sectionRef });

    return (
        <section className='faq container' id='faq' ref={sectionRef}>
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