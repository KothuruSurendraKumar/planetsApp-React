// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetsDetails} = props
  const {name, imageUrl, description} = planetsDetails

  return (
    <div className="list-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planetImg" />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}
export default PlanetItem
