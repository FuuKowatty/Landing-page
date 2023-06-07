import { Review } from 'components/Review'

const users = [
  {
    name: 'Linda Larson',
    image: 'https://i.imgur.com/sDNCwTL.jpg',
    rate: 4.5,
    comment:
      'Sample text. Click to select the text box. Click again or double click to start editing the text.',
  },
  {
    name: 'Adam Jonson',
    image: 'https://i.imgur.com/w3o0EMn.png',
    rate: 5,
    comment:
      'Sample text. Click to select the text box. Click again or double click to start editing the text.',
  },

  {
    name: 'Sophia Anderson',
    image: 'https://i.imgur.com/JY2xQie.jpg',
    rate: 5,
    comment:
      'Sample text. Click to select the text box. Click again or double click to start editing the text.',
  },
]

export function Reviews() {
  return (
    <div className='reviews__container' id='Opinions'>
      <h2 className='section__title'>What our customers are saying?</h2>
      <div className='reviews'>
        {users.map((user) => {
          const { name, image, rate, comment } = user

          return <Review key={name} name={name} image={image} rate={rate} comment={comment} />
        })}
      </div>
    </div>
  )
}
