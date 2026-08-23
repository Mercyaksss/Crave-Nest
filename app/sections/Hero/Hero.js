import Image from 'next/image'
import Link from 'next/link'
import './Hero.scss'
import TornEdge from '@/app/components/TornEdge/TornEdge'

const features = [
  {
    label: 'Quality\nIngredients',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 21c8 0 14-6 14-14V4h-3C8 4 5 10 5 18v3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5 21c3-6 6-9 12-13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Hygienic\nPreparation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5l-8-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Timely\nDelivery',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 7h13v9H2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M15 10h3.5L21 13v3h-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="6.5" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'Made\nwith Love',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 20s-7.5-4.6-10-9.3C.4 7.4 2 4 5.4 4c2 0 3.4 1.1 4.3 2.4C10.6 5.1 12 4 14 4c3.4 0 5 3.4 3.3 6.7C15 15.4 12 20 12 20Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

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
            <Link href="/menu" className='btnPrimary'>
              Explore Menu
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <Link href="https://wa.me/2349012345678" target="_blank" rel="noopener noreferrer" className='btnSecondary'>
              Order on WhatsApp
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.2.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.2 0-.4 0-.5 0-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.6 1.1 2.8c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3Z" />
              </svg>
            </Link>
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
          <div className='imageFade' />
          <Image
            src="/images/heroCake.png"
            alt="Crave Nest signature chocolate drip cake topped with blueberries"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className='heroImage'
          />
        </div>
      </div>
      <TornEdge color='var(--color-background)'/>
    </section>
  )
}

export default Hero