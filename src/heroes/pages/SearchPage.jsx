// import { HeroCard } from "../components"

import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import queryString from 'query-string'

export function SearchPage () {
  const { searchText, onInputChange } = useForm({
    searchText: ''
  })

  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)

  const handleSubmitForm = (e) => {
    e.preventDefault()
    if (searchText.trim().length < 1) return
    console.log(searchText)
    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className='row'>

        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleSubmitForm}>
            <input
              type='text'
              placeholder='Search a hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />
            <button className='btn btn-outline-primary mt-1 '>Search</button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />
          <div className='alert alert-primary '>
            Search a hero
          </div>
          <div className='alert alert-danger'>
            No hero With <b>{q}</b>
          </div>
          {/* <HeroCard /> */}

        </div>
      </div>
    </>
  )
}
