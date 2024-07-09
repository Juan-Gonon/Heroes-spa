import { Navbar } from '../../ui'
import { MarvelPage, DcPage, HeroPage, SearchPage } from '../pages'
import { Navigate, Route, Routes } from 'react-router-dom'

export function HeroesRoutes () {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/marvel' element={<MarvelPage />} />
          <Route path='/dc' element={<DcPage />} />
          <Route path='/' element={<Navigate to='/marvel' />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/hero' element={<HeroPage />} />
        </Routes>
      </div>
    </>
  )
}
