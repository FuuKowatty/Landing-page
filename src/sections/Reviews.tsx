import { Review } from 'components/Review'
import 'sass/style.scss'

const users = [
  {
    name: 'Linda Larson',
    image: 'https://i.imgur.com/wwe4eu0.jpg',
    rate: 4.5,
    comment:
      'Sample text. Click to select the text box. Click again or double click to start editing the text.',
  },
  {
    name: 'Adam Jonson',
    image: 'https://i.imgur.com/c9g8Kst.png',
    rate: 5,
    comment:
      'Sample text. Click to select the text box. Click again or double click to start editing the text.',
  },

  {
    name: 'Sophia Anderson',
    image: 'https://i.imgur.com/fy8RQDk.jpg',
    rate: 5,
    comment:
      'Sample text. Click to select the text box. Click again or double click to start editing the text.',
  },
]

export function Reviews() {
  return (
    <div className='reviews__container'>
      <h1 className='reviews__container__title'>What our customers are saying?</h1>
      <div className='reviews'>
        {users.map((user) => {
          const { name, image, rate, comment } = user

          return <Review name={name} image={image} rate={rate} comment={comment} />
        })}
      </div>
    </div>
  )
}
