import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers'
import { useMemo } from 'react'

export function HeroPage () {
  const { id } = useParams()
  const navigate = useNavigate()
  const hero = useMemo(() => {
    return getHeroById({ id })
  }, [id])

  if (!hero) return <Navigate to='/marvel' />

  const handleClickBack = () => {
    navigate(-1)
  }

  console.log(hero)
  return (
    <div className='row mt-5 '>
      <div className='col-4'>
        <img className='img-thumbnail animate__animated animate__fadeInLeft' src={`/src/assets/heroes/${id}.jpg`} alt='' />
      </div>

      <div className='col-8'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className='list-group-item'>
            <b>First Appearance:</b> {hero.first_appearance}
          </li>
        </ul>
        <div className='mt-3'>Characters</div>
        <p>{hero.characters}</p>
        <button className='btn btn-outline-primary' onClick={handleClickBack}>Regresar</button>
      </div>

    </div>
  )
}
