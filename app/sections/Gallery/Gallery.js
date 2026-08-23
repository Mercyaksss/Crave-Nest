import React from 'react'
import Image from 'next/image'
import { galleryItems } from '@/app/constants'
import './Gallery.scss'
import TornEdgeTop from '@/app/components/TornEdge/TornEdgeTop'
import TornEdge from '@/app/components/TornEdge/TornEdge'

function Gallery() {
  return (
    <section className='gallery container' id='gallery'>
        <h2 className='script'>Gallery</h2>
        <p>A little glimpse of our creation.</p>
        <div className='gallery-grid'>
            {galleryItems.map((item) => (
                <div key={item.name} className={`image-container ${item.className}`}>
                    <Image
                        src={`/images/${item.name}.png`}
                        fill
                        alt='gallery images'
                    />
                </div>
            ))}
        </div>
        <TornEdge color='var(--color-primary)'/>
    </section>
  )
}

export default Gallery