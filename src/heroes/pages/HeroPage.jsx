import { Navigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers'

export function HeroPage () {
  const { id } = useParams()
  const hero = getHeroById({ id })

  if (!hero) return <Navigate to='/marvel' />

  console.log(hero)
  return (
    <>
      {
      hero.alter_ego
    }
    </>
  )
}
