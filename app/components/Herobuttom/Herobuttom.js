import React from 'react'
import './Herobuttom.scss'

function Herobuttom({icon, word1, word2}) {
  return (
    <div className='hero-buttom'>
        <div className='icon'>{icon}</div>
        <p>{word1} <br/> {word2}</p>
    </div>
  )
}

export default Herobuttom
