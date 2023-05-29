import 'sass/style.scss';

export function Hero() {
  return (
    <div className='hero--section'>
    <div className='hero__content'>
    <div className='hero__title'>
       <span className='hero__title__item'>Discover Thailand</span>
       <span className='hero__title__item'>Discover Thailand</span>
       <span className='hero__title__item'>Discover Thailand</span>
    </div>
    <div className='hero__description'>
    Welcome to the mesmerizing land of Thailand, where ancient traditions meet vibrant modernity, and breathtaking natural beauty unfolds at every turn. Embark on a captivating journey as we invite you to explore this enchanting Southeast Asian gem.
    </div>
    <button className='hero__button'>Sign Up</button>
    </div>
  </div>
  )
}
