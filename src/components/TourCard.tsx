import { tourProps } from 'App'
import 'sass/style.scss'
import { handleUserTourProps } from 'sections/Explore'

interface TourCardProps {
  tour: tourProps
  handleUserTour: handleUserTourProps
}

export function TourCard({ tour, handleUserTour }: TourCardProps) {
  const { image, name, description, price } = tour

  return (
    <div className='tour-card'>
      <img className='tour-card__image' src={image} alt={name} />
      <div className='tour-card__content'>
        <h3 className='tour-card__name'>{name}</h3>
        <p className='tour-card__description'>{description}</p>
      </div>
      <div className='tour-card__price'>Price: ${price}</div>
      <button className='button--card' onClick={() => handleUserTour(tour.name)}>
        Book Now
      </button>
    </div>
  )
}
