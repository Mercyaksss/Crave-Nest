'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { features } from '@/app/constants';
import Button from '@/app/components/Button/Button';
import { FaWhatsapp } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './Hero.scss'

// Landing hero: intro copy + CTAs on the left, product image on the right.
// `features` (icon + label list) is pulled from app-wide constants so it can
// be reused/updated in one place.
function Hero() {
  // Scopes the load-in animation below to just this section.
  const heroRef = useRef(null);

  // Subtle entrance animation, played once when the page first loads.
  // Like the navbar, the hero is visible immediately (not scrolled into
  // view), so this is a plain on-mount animation rather than the
  // scroll-triggered useScrollReveal used by sections further down the
  // page. Built as a single timeline so each piece cascades into the next
  // (slightly overlapping via the negative offsets below) instead of every
  // element animating in isolation.
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power2.out', duration: 0.6 },
    });

    tl.from('.tagline', { opacity: 0, y: 20 })
      .from('.heading', { opacity: 0, y: 24 }, '-=0.4')
      .from('.description', { opacity: 0, y: 20 }, '-=0.35')
      .from('.buttons', { opacity: 0, y: 16 }, '-=0.3')
      .from('.features li', { opacity: 0, y: 14, stagger: 0.08 }, '-=0.25')
      // Image fades/scales in slightly, overlapping with the text cascade
      // above rather than waiting for it to finish — keeps the whole
      // entrance feeling like one moment instead of two separate beats.
      .from('.imageWrapper', { opacity: 0, scale: 0.96 }, '-=0.6');
  }, { scope: heroRef });

  return (
    <section id='home' className='hero' ref={heroRef}>
      <div className='container inner'>

        {/* Left column: tagline, heading, description, CTAs, feature list */}
        <div className='content'>
          <p className='script tagline'>
            Made with passion,
            <br />
            served with care
          </p>

          <h1 className='heading'>
            Crave <span className='accent'>Nest</span>
          </h1>

          <p className='description'>
            Delicious bakes and exceptional catering for every occasion.
          </p>

          {/* Primary/secondary CTA pair. Styling (colors/border) is passed
              as props rather than hardcoded in Button, so each usage can
              look different without new Button variants. */}
          <div className='buttons'>
             <Button 
                title='Explore Menu'
                icon={<GoArrowRight />}
                href="#menu"
                background='var(--color-accent)'
                color='var(--color-text-dark)'
            />

            <Button 
                title='Order on WhatsApp'
                icon={<FaWhatsapp />}
                href="https://wa.me/2349078006689"
                border= '1px solid rgba(255, 255, 255, 0.35)'
            />
          </div>

          {/* Trust/feature badges (e.g. "Quality Ingredients", "Timely
              Delivery"). Each label may contain a '\n' to force a line
              break after the first word/phrase — see split() below. */}
          <ul className='features'>
            {features.map((feature) => (
              <li key={feature.label} className='feature'>
                <span className='featureIcon'>{feature.icon}</span>
                <span className='featureLabel'>
                  {feature.label.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {/* Only insert a <br /> after the first line, so
                          labels without a '\n' render normally. */}
                      {i === 0 && <br />}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column: hero product image. `fill` + `sizes` lets Next.js
            serve an appropriately sized image per breakpoint; the wrapper
            (`.imageWrapper` in Hero.scss) provides the sizing context. */}
        <div className='imageWrapper'>
          <Image
            src="/images/heroCake2.png"
            alt="Crave Nest signature chocolate drip cake topped with blueberries"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className='heroImage'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero