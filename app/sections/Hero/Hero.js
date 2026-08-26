import Image from 'next/image';
import { features } from '@/app/constants';
import Button from '@/app/components/Button/Button';
import { FaWhatsapp } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import './Hero.scss'

// Landing hero: intro copy + CTAs on the left, product image on the right.
// `features` (icon + label list) is pulled from app-wide constants so it can
// be reused/updated in one place.
function Hero() {
  return (
    <section id='home' className='hero'>
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