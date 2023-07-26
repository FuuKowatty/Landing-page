import 'sass/style.scss'

import { Form } from 'components/Form/Form'

export function Reservation() {
  return (
    <section className='reservation' id='Reservation'>
      <h2 className='section__title'>Make Reservation</h2>
      <Form />
    </section>
  )
}
