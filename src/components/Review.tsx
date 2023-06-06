import 'sass/style.scss'
import { generateStarIcons } from 'utils/generateStarIcons'

interface ReviewProps {
  name: string
  rate: number
  image: string
  comment: string
}

export function Review({ name, rate, image, comment }: ReviewProps) {
  return (
    <div className='review'>
      <div className='review__image'>
        <img src={image} alt='customer' />
      </div>
      <h3 className='review__name'>{name}</h3>
      <p className='review__rate'>{generateStarIcons(rate)}</p>
      <p className='review_comment'>{comment}</p>
    </div>
  )
}
