import { TourCard } from 'components/TourCard'
import 'sass/style.scss'

const tourData = [
  {
    image: 'https://placehold.co/300x300',
    name: 'Amazing Tour',
    description: 'Experience the adventure of a lifetime!',
    price: 99.99,
  },
  {
    image: 'https://placehold.co/300x300',
    name: 'Scenic Hike',
    description: 'Discover breathtaking views and untouched nature.',
    price: 79.99,
  },
  {
    image: 'https://placehold.co/300x300',
    name: 'Amazing Tour2',
    description: 'Experience the adventure of a lifetime!',
    price: 99.99,
  },
  {
    image: 'https://placehold.co/300x300',
    name: 'Scenic Hike3',
    description: 'Discover breathtaking views and untouched nature.',
    price: 79.99,
  },
  {
    image: 'https://placehold.co/300x300',
    name: 'Amazing Tour4',
    description: 'Experience the adventure of a lifetime!',
    price: 99.99,
  },
  {
    image: 'https://placehold.co/300x300',
    name: 'Scenic Hik5e',
    description: 'Discover breathtaking views and untouched nature.',
    price: 79.99,
  },
  // Add more tour objects as needed
]

export function Explore() {
  return (
    <div className='explore'>
      <h1 className='tours__title'>Explore</h1>
      <div className='tours'>
        {tourData.map((tour) => {
          const { name, description, price, image } = tour

          return (
            <TourCard
              key={tour.name}
              name={name}
              description={description}
              price={price}
              image={image}
            />
          )
        })}
      </div>
    </div>
  )
}
