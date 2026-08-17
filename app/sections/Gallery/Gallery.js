import React from 'react'
import Image from 'next/image'
import { galleryItems } from '@/app/constants'
import './Gallery.scss'

function Gallery() {
  return (
    <section className='gallery' id='gallery'>
        <h2 className='script'>Gallery</h2>
        <p>A little glimpse of our creation.</p>
        <div className='gallery-flex'>
            {galleryItems.map((item) => (
                <div key={item} className='image-container'>
                    <Image
                        src={`/images/${item}.png`}
                        fill
                        alt='gallery images'
                    />
                </div>
            ))}
        </div>
    
    </section>
  )
}

export default Gallery
