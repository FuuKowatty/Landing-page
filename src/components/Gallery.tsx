import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import 'sass/style.scss'

const images = [
  'https://placehold.co/400',
  'https://placehold.co/400',
  'https://placehold.co/400',
  'https://placehold.co/400',
  'https://placehold.co/400',
  'https://placehold.co/400',
]

export function Gallery() {
  return (
    <div className='gallery'>
        <div className='slider'>
          <Splide options={ 
            { 
              rewind: true,
              role: 'carousel',

            } 
          } aria-label="React Splide Example">
            {images.map(image =>(
                <SplideSlide key={image}>
                  <img src={image} className='slider__img'/>
                </SplideSlide>
              ))}
    </Splide>
    </div>
    </div>


  )
}
