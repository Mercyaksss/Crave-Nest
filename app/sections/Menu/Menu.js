import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRightLong } from "react-icons/fa6";
import { menuItems,WHATSAPP_NUMBER } from '../../constants'
import './Menu.scss'
import TornEdgeTop from '@/app/components/TornEdge/TornEdgeTop';
import TornEdge from '@/app/components/TornEdge/TornEdge';

// WhatsApp business number the "Request a quote" links message.
// Update to match the real number used elsewhere on the site.

function Menu() {
  return (
    <section id='menu' className='menu-section'>
      <div className='container'>
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
              >
                <div className='menu-item-image'>
                  <Image
                    src={`/images/${item.image}`}
                    alt={item.name}
                    fill
                    sizes="(max-width: 700px) 60vw, 320px"
                  />
                </div>

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