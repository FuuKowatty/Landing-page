import { Splide, SplideSlide } from '@splidejs/react-splide'
import { handleUserTourProps, tourProps } from 'App'
import { TourCard } from 'components/TourCard'
import 'sass/style.scss'


const spliderOptions = {
  type: 'loop',
  role: 'carousel',
  rewind: true,
  arrows: true,
  gap: 10,
  mediaQuery: 'min',
  perPage: 1,
  pagination: 0,
  breakpoints: {
    600: {
      perPage: 2,
    },
    1000: {
      perPage: 3,
    },
    1500: {
      perPage: 4,
    }
  }
}

export function Explore({
  tours,
  handleUserTour,
}: {
  tours: tourProps[]
  handleUserTour: handleUserTourProps
}) {
  return (
    <div className='explore' id='Explore'>
      <h1 className='tours__title'>Explore</h1>
      <div className='tours'>
      <Splide
          options={spliderOptions}
        >
            {tours.map((tour) => {
              return (
                <SplideSlide key={tour.name}>
                  <TourCard tour={tour} handleUserTour={handleUserTour} />
                </SplideSlide>
              )
            })}
        {tours.map((tour) => {
          return <SplideSlide key={tour.name}><TourCard tour={tour} handleUserTour={handleUserTour} /></SplideSlide>
        })}
        </Splide>
      </div>
    </div>
  )
}
