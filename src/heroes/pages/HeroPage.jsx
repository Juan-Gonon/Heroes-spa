import { useParams } from 'react-router-dom'

export function HeroPage () {
  const { id } = useParams()
  console.log(id)
  return (
    <div>HeroPage</div>
  )
}
