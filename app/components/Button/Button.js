import React from 'react'
import './Button.scss'

function Button({title, href, icon, color, background}) {
  return (
    <a href={href} className='cta-btn'
        style={{ color: color, backgroundColor: background}}
    >
        {title} {icon}
    </a>
  )
}

export default Button
