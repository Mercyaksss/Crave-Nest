import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRightLong } from "react-icons/fa6";
import './Menu.scss'
import TornEdge from '@/app/components/TornEdge/TornEdge';

// Dummy menu category data. Swap image paths / text for the real content later.
const menuItems = [
  {
    id: 'cakes',
    title: 'Cakes',
    description: 'Moist, rich, and beautifully decorated for every celebration.',
    image: '/images/meatpieImage.png',
  },
  {
    id: 'small-chops',
    title: 'Meatier Small Chops',
    description: 'Perfectly seasoned bites packed with flavor.',
    image: '/images/springrolls.png',
  },
  {
    id: 'doughnuts',
    title: 'Doughnuts',
    description: 'Soft, fluffy, and irresistibly delicious.',
    image: '/images/menu-doughnuts.png',
  },
  {
    id: 'pastries',
    title: 'Sotherton Pastries',
    description: 'Classic treats with a rich, melty touch of sweetness.',
    image: '/images/menu-pastries.png',
  },
];

// WhatsApp business number the "Request a quote" links should message.
// Update this to the real number/format used elsewhere in the site.
const WHATSAPP_NUMBER = '2349012345678';

function Menu() {
  return (
    <section className='menu-section'>
      <div className='container'>
        <h2 className='menu-heading'>
          Made to satisfy every <span className='accent'>craving.</span>
        </h2>

        <div className='menu-grid'>
          {menuItems.map((item) => {
            // Pre-fills the WhatsApp message with the item name so the
            // request already has context when it lands in the chat.
            const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              `Hi Crave Nest, I'd like a quote for ${item.title}.`
            )}`;

            return (
              <div className='menu-card' key={item.id}>
                <div className='menu-card-image'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 23vw"
                  />
                </div>

                <div className='menu-card-body'>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <Link
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='menu-card-link'
                  >
                    Request a quote <FaArrowRightLong size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <TornEdge color='var(--color-background-dark)'/>
    </section>
  )
}

export default Menu