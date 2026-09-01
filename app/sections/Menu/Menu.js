'use client';

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRightLong } from "react-icons/fa6";
import { menuItems,WHATSAPP_NUMBER } from '../../constants'
import './Menu.scss'
import TornEdgeTop from '@/app/components/TornEdge/TornEdgeTop';
import TornEdge from '@/app/components/TornEdge/TornEdge';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// WhatsApp business number the "Request a quote" links message.
// Update to match the real number used elsewhere on the site.

// Menu section: a zigzagging list of menu categories, each rendered as a
// circular image overlapping a torn-paper banner (name, description, and a
// "Request a quote" link that opens WhatsApp with a prefilled message).
// `menuItems` (and its shape: id/name/image/description/whatsappMessage)
// lives in constants so content can be edited without touching this file.
function Menu() {
  const sectionRef = useRef(null);

  // This section doesn't use the shared useScrollReveal hook (see
  // app/hooks/useScrollReveal.js) — that hook fires one animation from a
  // single trigger point, which works well for a compact block like About
  // or Hero, but not for a long repeating list like this one. With 7 rows
  // stacked across several screen heights, a single stagger fired the
  // moment the section enters view would mean rows far below the fold are
  // already fully faded in by the time you actually scroll down to them.
  //
  // ScrollTrigger.batch() is built for exactly this case: each row gets
  // its own trigger and animates individually, right as that specific row
  // enters the viewport, rather than all being scheduled from one point.
  useGSAP(() => {
    // Section intro (label + heading) — a small, non-repeating block, so
    // this part does use a plain single-trigger stagger like other sections.
    gsap.from(['.script.center', '.menu-heading'], {
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

    // Each menu row fades + slides up individually as it enters the
    // viewport, once, then stays.
    //
    // Rows are hidden immediately, up front, via gsap.set() — before
    // ScrollTrigger.batch is even created. Without this, a row sits fully
    // visible in its normal position until the moment it crosses the
    // trigger line, at which point gsap.from() would suddenly snap it down
    // into its hidden starting state before animating back up — a visible
    // flash/jump. Pre-hiding here means there's nothing to snap to: the
    // row is already hidden from the first frame, so onEnter just animates
    // it forward (gsap.to) to its visible state.
    gsap.set('.menu-item', { opacity: 0, y: 40 });

    ScrollTrigger.batch('.menu-item', {
      start: 'top 85%',
      once: true,
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
        });
      },
    });
  }, { scope: sectionRef });

  return (
    <section id='menu' className='menu-section' ref={sectionRef}>
      <div className='container'>
        <span className='script center'>Our Menu</span>
        <h2 className='menu-heading'>
          Made to satisfy every <span className='accent'>craving.</span>
        </h2>

        <div className='menu-list'>
          {menuItems.map((item, index) => {
            // Each item's own prefilled message (from constants) is
            // URL-encoded and appended to its WhatsApp link.
            const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              item.whatsappMessage
            )}`;

            // Alternates the image/banner side every other item (zigzag
            // layout), matching the reference design.
            const isReversed = index % 2 !== 0;

            return (
              <div
                className={`menu-item ${isReversed ? 'menu-item--reverse' : ''}`}
                key={item.id}
                id={`${item.id}`}
              >
                <div className='menu-item-image'>
                  <Image
                    src={`/images/${item.image}`}
                    alt={item.name}
                    fill
                    sizes="(max-width: 700px) 60vw, 320px"
                  />
                </div>

                {/* Torn-paper banner: top/bottom torn edges are separate
                    decorative components sandwiching the text content,
                    rather than a CSS clip-path, so the "tear" art can be
                    reused/swapped independently of this layout. */}
                <div className='menu-item-banner'>
                  <TornEdgeTop color='var(--color-secondary)'/>

                  <h3 className='script'>{item.name}</h3>
                  <p>{item.description}</p>

                  <Link
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='menu-item-cta'
                  >
                    Request a quote <FaArrowRightLong size={14} />
                  </Link>

                  <TornEdge color='var(--color-secondary)'/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Menu