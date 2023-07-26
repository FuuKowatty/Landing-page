import { HandleUserTour } from 'entities/handlers'
import { Tour } from 'entities/tour'
import { Link } from 'react-scroll'
import 'sass/style.scss'
import { SCROLL_DURATION, SCROLL_OFFSET } from 'utils/constants'

interface TourCardProps {
  tour: Tour
  handleUserTour: HandleUserTour
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
        smooth
        spy
        duration={SCROLL_DURATION}
        role='button'
        offset={SCROLL_OFFSET}
        className='tour-card__button reset__anchor'
        onClick={() => handleUserTour(tour.name)}
      >
        Book Now
      </Link>
    </div>
  )
}
