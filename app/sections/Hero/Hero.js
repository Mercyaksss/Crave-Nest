import Image from 'next/image';
import { features } from '@/app/constants';
import Button from '@/app/components/Button/Button';
import TornEdge from '@/app/components/TornEdge/TornEdge';
import { FaWhatsapp } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import './Hero.scss'

function Hero() {
  return (
    <section className='hero'>
      <div className='container inner'>
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

          <div className='buttons'>
             <Button 
                title='Explore Menu'
                icon={<GoArrowRight />}
                href="https://wa.me/2349012345678"
                background='var(--color-accent)'
                color='var(--color-text-dark)'
            />

            <Button 
                title='Order on WhatsApp'
                icon={<FaWhatsapp />}
                href="https://wa.me/2349012345678"
                border= '1px solid rgba(255, 255, 255, 0.35)'
            />
          </div>

          <ul className='features'>
            {features.map((feature) => (
              <li key={feature.label} className='feature'>
                <span className='featureIcon'>{feature.icon}</span>
                <span className='featureLabel'>
                  {feature.label.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i === 0 && <br />}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>

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
      {/* <TornEdge color='var(--color-background)'/> */}
    </section>
  )
}

export default Hero