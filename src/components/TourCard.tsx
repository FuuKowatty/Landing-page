import 'sass/style.scss'

interface TourCardProps {
  image: string
  name: string
  description: string
  price: number
}

export function TourCard({ image, name, description, price }: TourCardProps) {
  return (
    <div className='tour-card'>
      <img className='tour-card__image' src={image} alt={name} />
      <div className='tour-card__content'>
        <h3 className='tour-card__name'>{name}</h3>
        <p className='tour-card__description'>{description}</p>
      </div>
      <div className='tour-card__price'>Price: ${price}</div>
      <button className='button--card'>Book Now</button>
    </div>
  )
}
