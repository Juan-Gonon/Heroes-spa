import { useEffect, useState } from 'react'
import { getHeroesByPublisher } from '../helpers'

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
    <ul>
      {
            heros?.map((hero) => (
              <li key={hero.id}>
                <p>{hero.superhero}</p>
              </li>
            ))
        }
    </ul>
  )
}
