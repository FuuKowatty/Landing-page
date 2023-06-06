import { handleUserTourProps, tourProps } from 'App'
import 'sass/style.scss'

import { Form } from 'components/Form/Form'

export interface reservationProps {
  userTour: tourProps | null
  handleUserTour: handleUserTourProps
  tourNames: string[]
}

export function Reservation({ userTour, handleUserTour, tourNames }: reservationProps) {
  return (
    <div className='reservation'>
      <h2>Make Reservation</h2>
      <Form userTour={userTour} tourNames={tourNames} handleUserTour={handleUserTour} />
    </div>
  )
}
