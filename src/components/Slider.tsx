import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { sliderData } from 'assets/data/sllider'
import 'sass/style.scss'


const spliderOptions = {
  type: 'loop',
  role: 'carousel',
  rewind: true,
  arrows: true,
}

export function Slider() {
  return (
    <div className='slider'>
      <Splide options={spliderOptions} aria-label='latest tours slider'>
        {sliderData.map((image) => (
          <SplideSlide key={image.url}>
            <div className='slide'>
              <img src={image.url} className='slider__image' alt='image slider' />
              <div className='slide__content'>
                <h3 className='slide__title'>{image.name}</h3>
                <p className='slide__description'>{image.description}</p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
