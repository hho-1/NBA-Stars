import React, { useState } from 'react'
import "../index.css"
import PlayerCard from './PlayerCard'

const CardContainer = ({data}) => {

  const [searchInput, setSearchInput] = useState('')
  
  const handleSearch = (text) => {
    
      setSearchInput(text.target.value.toLowerCase())
  
  }
  
  
  return (
    <div className='card-container'>
      <input type="text" placeholder='Search player' className='searchInput form-control mx-auto' onChange={handleSearch}/>
      <section className='players'>
          
          {
            searchInput ? (
              data.filter((person) => {
              return person.name.toLowerCase().includes(searchInput)
            }).map((filteredPerson, index) => (<PlayerCard  key={index} {...filteredPerson} />)))
              
            :
              (data.map((player, index) => (
                <PlayerCard key={index} {...player}/>
              )
              )
              )
          }
      </section>
    </div>
  )
}

export default CardContainer