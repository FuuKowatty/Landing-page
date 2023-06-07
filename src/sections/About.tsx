import { Slider } from 'components/Slider'

export default function About() {
  return (
    <div className='about' id='About'>
      <div className='about__content'>
        <h2 className='section__title'>About Us</h2>
        <p className='about__description'>
          {' '}
          we specialize in providing unforgettable tour experiences across various Asian countries.
          Our primary focus is to offer affordable travel packages that encompass all aspects of
          your journey, including hotel accommodations and meticulously planned entertainment
          activities. We take pride in catering to larger groups of travelers while ensuring that
          they receive exceptional value for their money.!
        </p>
      </div>
      <Slider />
    </div>
  )
}
