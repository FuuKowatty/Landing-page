import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { TourCard } from 'components/TourCard'
import 'sass/style.scss'

const spliderOptions = {
  type: 'loop',
  role: 'carousel',
  rewind: true,
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
    },
  },
}

export function Explore({
  tours,
  handleUserTour,
}: {
  tours: tourProps[]
  handleUserTour: handleUserTourProps
}) {
  return (
    <section className='explore' id='Explore'>
      <h2 className='section__title'>Explore</h2>
      <div className='tours'>
        <Splide options={spliderOptions} hasTrack={false}>
        <SplideTrack>
          {tours.map((tour) => {
            return (
                <SplideSlide key={tour.name}>
                  <TourCard tour={tour} handleUserTour={handleUserTour} />
                </SplideSlide>
            )
          })}
          </SplideTrack>
          <div className='splide__arrows'>
            <button style={{padding: '25px'}} className='splide__arrow splide__arrow--prev slider__arrow'>{'<'}</button>
            <button style={{padding: '25px'}} className='splide__arrow splide__arrow--next'>{'>'}</button>
          </div>
        </Splide>
      </div>
    </section>
  )
}
