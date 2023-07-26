import { Slider } from 'components/Slider'

export default function About() {
  return (
    <section className='about' id='About'>
      <div className='about__content'>
        <h2 className='section__title'>About Us</h2>
        <p className='about__description'>
          {' '}
          We specialise in providing memorable travel experiences in various Asian countries. Our
          primary focus is to offer affordable tour packages that cover all aspects of your trip,
          including hotel accommodation and carefully planned entertainment activities. We pride
          ourselves on being able to cater for larger groups of travellers whilst ensuring that they
          receive exceptional value for money!
        </p>
      </div>
      <Slider />
    </section>
  )
}
