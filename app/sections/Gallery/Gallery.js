'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { galleryItems } from '@/app/constants'
import './Gallery.scss'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import TornEdgeTop from '@/app/components/TornEdge/TornEdgeTop'
import TornEdge from '@/app/components/TornEdge/TornEdge'
import { useScrollReveal } from '@/app/hooks/useScrollReveal'

// Photo gallery: a horizontally scrollable carousel. The card whose center
// is closest to the middle of the visible track is shown larger/at full
// opacity; every other card is smaller and faded. Scrolling is native
// (swipe/drag/trackpad all work automatically via overflow-x + scroll-snap)
// — arrow buttons scroll to the next/previous card using that same
// mechanism, so behavior stays consistent either way.
function Gallery() {
    // Scroll-triggered entrance for the section intro (label + description)
    // and the carousel, treated as three staggered blocks. Deliberately
    // NOT animating the individual .gallery-card elements inside the
    // carousel: they already have their own transform: scale(...) driven
    // by CSS (see .gallery-card.active below) for the active/inactive
    // carousel highlight, and GSAP writes directly to that same `transform`
    // inline style. Animating each card here would overwrite that CSS-
    // driven scale the moment this entrance animation finished, breaking
    // the carousel's core visual effect. Animating the carousel container
    // as a single block avoids that conflict entirely.
    const galleryRef = useScrollReveal({
        targetSelector: '.script, p, .gallery-carousel',
        stagger: 0.12,
        y: 30,
    });

    // Track (scrollable) element and one ref per card, so we can scroll to
    // a specific card and measure each card's on-screen position.
    const trackRef = useRef(null)
    const cardRefs = useRef([])

    // Index of the card currently centered in the track
    const [activeIndex, setActiveIndex] = useState(0)

    // Figures out — right now, from actual on-screen positions — which
    // card's center is closest to the track's own center. This is
    // calculated fresh every time it's called (not read from React state),
    // which matters for the arrow buttons below: clicking "next" twice in
    // quick succession should always act on where the carousel really is,
    // not on a value that might not have updated yet.
    const getCenterIndex = () => {
        const track = trackRef.current
        if (!track) return activeIndex

        const trackRect = track.getBoundingClientRect()
        const trackCenter = trackRect.left + trackRect.width / 2

        let closestIndex = 0
        let closestDistance = Infinity

        cardRefs.current.forEach((card, index) => {
            if (!card) return
            const cardRect = card.getBoundingClientRect()
            const cardCenter = cardRect.left + cardRect.width / 2
            const distance = Math.abs(cardCenter - trackCenter)

            if (distance < closestDistance) {
                closestDistance = distance
                closestIndex = index
            }
        })

        return closestIndex
    }

    // Smooth-scrolls the track so the given card index is centered
    const scrollToIndex = (index) => {
        const card = cardRefs.current[index]
        if (card) {
            card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
        }
    }

    // Both handlers recompute the current center card (rather than trusting
    // activeIndex state, which could be a beat behind), then do two things:
    // scroll to the target card, AND set it as active immediately. Setting
    // it directly here — rather than waiting for the scroll listener below
    // to notice — means the highlight updates the instant you click,
    // instead of depending on a scroll event firing exactly as expected.
    const goToPrevious = () => {
        const targetIndex = Math.max(getCenterIndex() - 1, 0)
        scrollToIndex(targetIndex)
        setActiveIndex(targetIndex)
    }

    const goToNext = () => {
        const targetIndex = Math.min(getCenterIndex() + 1, galleryItems.length - 1)
        scrollToIndex(targetIndex)
        setActiveIndex(targetIndex)
    }

    // Keeps activeIndex in sync with the real, live center card while the
    // user scrolls, drags, or swipes — not just after an arrow click.
    // Throttled to once per animation frame so it stays cheap during a
    // fast swipe.
    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        let frameId = null

        const handleScroll = () => {
            if (frameId) return // an update is already scheduled for this frame
            frameId = requestAnimationFrame(() => {
                setActiveIndex(getCenterIndex())
                frameId = null
            })
        }

        track.addEventListener('scroll', handleScroll)
        handleScroll() // run once on mount in case the initial position isn't index 0

        return () => {
            track.removeEventListener('scroll', handleScroll)
            if (frameId) cancelAnimationFrame(frameId)
        }
    }, [])

    return (
        <section className='gallery container' id='gallery' ref={galleryRef}>
            <span className='script'>Gallery</span>
            <p>A little glimpse of our creation.</p>

            <div className='gallery-carousel'>
                <div className='gallery-track' ref={trackRef}>
                    {galleryItems.map((item, index) => (
                        <div
                            key={item.name}
                            ref={(el) => (cardRefs.current[index] = el)}
                            className={`gallery-card ${index === activeIndex ? 'active' : ''}`}
                        >
                            <Image
                                src={`/images/${item}.png`}
                                fill
                                sizes="(max-width: 600px) 70vw, 340px"
                                alt='gallery images'
                            />
                        </div>
                    ))}
                </div>

                {/* Arrow controls — disabled at each end instead of wrapping
                    around, matching how the scroll track itself behaves */}
                <div className='gallery-nav'>
                    <button
                        type='button'
                        onClick={goToPrevious}
                        aria-label='Previous photo'
                        disabled={activeIndex === 0}
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        type='button'
                        onClick={goToNext}
                        aria-label='Next photo'
                        disabled={activeIndex === galleryItems.length - 1}
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>

            <TornEdgeTop color='var(--color-primary)'/>
            <TornEdge color='var(--color-primary)'/>
        </section>
    )
}

export default Gallery