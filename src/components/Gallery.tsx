import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import 'sass/style.scss'

const images = [
  'https://i.imgur.com/h4rQgZ4.jpg',
  'https://i.imgur.com/SikzDp8.jpg',
  'https://i.imgur.com/CW4tNwS.jpg',
  'https://i.imgur.com/0Q6S6VC.jpg',
  'https://i.imgur.com/lUG0SER.jpg',
]

const spliderOptions = {
  rewind: true,
  perPage: 3,
}

export function Gallery() {
  return (
    <div className='gallery'>
      Siema
        <div className='slider'>
          <Splide options={ 
            { 
              spliderOptions

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
