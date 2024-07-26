import { HeroCard } from '../components'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import queryString from 'query-string'
import { getHeroesByName } from '../helpers'

export function SearchPage () {
  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)
  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const heroes = getHeroesByName({ name: q })
  // console.log(heroes)

  const handleSubmitForm = (e) => {
    e.preventDefault()
    // if (searchText.trim().length < 1) return
    // console.log(searchText)
    navigate(`?q=${searchText}`)
  }

  const showSearch = (q.length === 0)
  const showError = (q.length > 0) && heroes.length === 0

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className='row'>

        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form aria-label='form-event' onSubmit={handleSubmitForm}>
            <input
              type='text'
              placeholder='Search a hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
              aria-label='searchText'
            />
            <button className='btn btn-outline-primary mt-1 '>Search</button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />
          {/* {
            (q === '')
              ? (
                <div className='alert alert-primary '>
                  Search a hero
                </div>
                )
              : (heroes.length === 0) && (
                <div className='alert alert-danger'>
                  No hero With <b>{q}</b>
                </div>
                )
          } */}

          <div
            aria-label='msg-search-hero'
            className='alert alert-primary animate__animated animate__fadeIn ' style={{
              display: showSearch ? '' : 'none'
            }}
          >
            Search a hero
          </div>

          <div
            aria-label='alert-not-hero'
            className='alert alert-danger animate__animated animate__fadeIn' style={{
              display: showError ? '' : 'none'
            }}
          >
            No hero With <b>{q}</b>
          </div>

          {
            heroes.map((hero) => (
              <HeroCard key={hero.id} {...hero} />

            ))
          }

        </div>
      </div>
    </>
  )
}
