import 'sass/style.scss'

import { Form } from 'components/Form/Form'

export function Reservation({ userTour, handleUserTour, tourNames }: reservationProps) {
  return (
    <section className='reservation' id='Reservation'>
      <h2 className='section__title'>Make Reservation</h2>
      <Form userTour={userTour} tourNames={tourNames} handleUserTour={handleUserTour} />
    </section>
  )
}
