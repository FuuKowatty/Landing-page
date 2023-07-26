import { Link } from 'react-scroll'
import 'sass/style.scss'

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

      <Link
        to={'reservation'}
        smooth={true}
        spy={true}
        duration={500}
        role='button'
        offset={-100}
        className='tour-card__button reset__anchor'
        onClick={() => handleUserTour(tour.name)}
      >
        Book Now
      </Link>
    </div>
  )
}
