import { handleUserTourProps, tourProps } from 'App'
import { TourCard } from 'components/TourCard'
import 'sass/style.scss'



export function Explore({
  tours,
  handleUserTour,
}: {
  tours: tourProps[]
  handleUserTour: handleUserTourProps
}) {
  return (
    <div className='explore'>
      <h1 className='tours__title'>Explore</h1>
      <div className='tours'>
        {tours.map((tour) => {
          return <TourCard key={tour.name} tour={tour} handleUserTour={handleUserTour} />
        })}
      </div>
    </div>
  )
}
