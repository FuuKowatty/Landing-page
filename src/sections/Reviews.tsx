import { usersData } from 'assets/data/reviews'
import { Review } from 'components/Review'

export function Reviews() {
  return (
    <section className='reviews__container' id='Opinions'>
      <h2 className='section__title'>What our customers are saying?</h2>
      <div className='reviews'>
        {usersData.map((user) => {
          const { name, image, rate, comment } = user

          return <Review key={name} name={name} image={image} rate={rate} comment={comment} />
        })}
      </div>
    </section>
  )
}
