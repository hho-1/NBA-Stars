import React, { useState } from 'react'
import "../index.css"

const PlayerCard = ({img, name, statistics}) => {

  const [showCard, setShowCard] = useState(true)

  const handleClick = () => {
    setShowCard(!showCard)
  }

  return (
    <div className='player-card' onClick={handleClick}>
      {showCard ? (
        <img src={img} alt={name}/>
        ) 
        : 
        (
          <ul className='ulItems'>
            {statistics.map((a, index) => {
              return <li key={index}>🏀{a}</li>
            })}
          </ul>
        )
        
      }
      <section className='nameOfPlayer'>
        <h4>{name}</h4>
      </section>
    </div>
  )
}

export default PlayerCard