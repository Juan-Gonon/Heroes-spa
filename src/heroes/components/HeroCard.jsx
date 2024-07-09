/* eslint-disable camelcase */
export function HeroCard ({
  // eslint-disable-next-line react/prop-types
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}) {
  const heroImageUrl = `/src/assets/heroes/${id}.jpg`

  return (
    <div className='col'>
      <div className='card'>
        <div className='row no-gutters '>
          <div className='col-4'>
            <img src={heroImageUrl} alt={superhero} className='card-img' />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>{superhero}</h5>
              <p className='card-text'>{alter_ego}</p>
              <p>{characters}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
