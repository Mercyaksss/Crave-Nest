'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useScrollReveal
 * ----------------
 * Shared "fade + slide up" entrance animation, triggered once when an
 * element scrolls into view. Meant to be reused across sections so every
 * scroll-triggered animation on the site behaves consistently, instead of
 * each component writing its own GSAP setup from scratch.
 *
 * Attach the returned ref to the element that should animate in (usually a
 * section wrapper):
 *
 *   const sectionRef = useScrollReveal();
 *   <section ref={sectionRef}>...</section>
 *
 * For a group of items that should animate in one after another (a grid,
 * a list, etc.), pass `targetSelector` and a `stagger` value — this
 * animates each matching child inside the container individually instead
 * of the container as a whole:
 *
 *   const listRef = useScrollReveal({ targetSelector: '.menu-item', stagger: 0.15 });
 *   <div ref={listRef}>{items.map(...)}</div>
 *
 * Not used by the navbar — the navbar is visible immediately on page load
 * rather than scrolled into view, so it uses a plain on-mount GSAP
 * animation instead (see Navbar.js).
 */
export function useScrollReveal({
  targetSelector = null, // if null, animates the container itself
  y = 40,                // distance (px) the element slides up from
  duration = 0.8,
  stagger = 0,           // delay between each matched element, if targeting multiple
  start = 'top 85%',     // when the animation triggers, relative to the viewport
} = {}) {
  const containerRef = useRef(null);

  useGSAP(() => {
    const targets = targetSelector
      ? containerRef.current.querySelectorAll(targetSelector)
      : containerRef.current;

    gsap.from(targets, {
      opacity: 0,
      y,
      duration,
      stagger,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start,
        toggleActions: 'play none none none', // play once, never reverse/replay
      },
    });
  }, { scope: containerRef });

  return containerRef;
}

export default useScrollReveal;