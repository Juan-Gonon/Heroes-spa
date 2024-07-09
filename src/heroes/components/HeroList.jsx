import { useEffect, useState } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard'

// eslint-disable-next-line react/prop-types
export function HeroList ({ publisher }) {
//   console.log(publisher)
  const [heros, setHero] = useState([])

  useEffect(() => {
    const newHero = getHeroesByPublisher({ publisher })
    // console.log(newHero)
    setHero(newHero)
  }, [publisher])

  return (
    <div className=' row row-cols-1 row-cols-md-3 accordion '>
      {
            heros?.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))
        }
    </div>
  )
}
