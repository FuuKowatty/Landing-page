import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import 'sass/style.scss'


const images = [
  {
  url: 'https://i.imgur.com/h4rQgZ4.jpg',
  name: 'India',
  description: 'India, a culturally rich and diverse country, invites tourists with its ancient heritage sites and vibrant cities, offering an immersive experience of captivating traditions, delicious cuisine, and warm hospitality.'
  },
  {
  url: 'https://i.imgur.com/CW4tNwS.jpg',
  name: 'Japan',
  description: 'Japan, a land of contrasts, enthralls visitors with its harmonious blend of ancient traditions and modern innovations. From the serene beauty of cherry blossoms to the bustling streets of Tokyo, Japan offers a captivating experience of historic landmarks, exquisite cuisine, and gracious hospitality.'
  },
  {
  url: 'https://i.imgur.com/0Q6S6VC.jpg',
  name: 'Malaysia',
  description: 'Malaysia, a melting pot of cultures, entices travelers with its stunning landscapes, vibrant cities, and warm tropical climate. From the bustling streets of Kuala Lumpur to the breathtaking beauty of Langkawi Island, Malaysia offers a delightful fusion of diverse cuisines, colorful festivals, and friendly locals.'
  },
  {
  url: 'https://i.imgur.com/SikzDp8.jpg',
  name: 'Indonesia',
  description: 'Indonesia, an archipelago of natural wonders, captivates visitors with its pristine beaches, lush rainforests, and ancient temples. From the vibrant streets of Bali to the tranquility of Komodo Island, Indonesia offers an enchanting mix of cultural heritage, adventurous activities, and awe-inspiring landscapes.'
  },
  {
  url: 'https://i.imgur.com/lUG0SER.jpg',
  name: 'Thailand',
  description: 'Thailand, the Land of Smiles, enchants travelers with its vibrant street markets, ornate temples, and idyllic tropical islands. From the bustling capital city of Bangkok to the stunning beaches of Phuket, Thailand offers a sensory journey of spicy cuisine, traditional art forms, and warm hospitality.'
  }
  ];

const spliderOptions = {
  type: 'fade',
  role: 'carousel',
  rewind:true, 
  autoplay: true,
  arrows: true,
}

export function Gallery() {
  return (
    <div className='gallery'>
        <h1>Our Latest Tours</h1>
        <div className='slider'>
          <Splide options={ 
            { 
              ...spliderOptions

            } 
          } aria-label="React Splide Example">
            {images.map(image =>(
                <SplideSlide key={image.url}>
                  <div className='slide'>
                  <img src={image.url} className='slider__img' alt='image slider'/>
                    <div className='slide__content'>
                      <h2 className='slide__title'>{image.name}</h2>
                      <p className='slide__description'>{image.description}</p>
                    </div>
                  </div>
                </SplideSlide>
              ))}
    </Splide>
    </div>
    </div>


  )
}
