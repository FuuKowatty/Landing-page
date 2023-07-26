import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BsStarHalf } from 'react-icons/bs'

export function generateStarIcons(rate: number) {
  const TOTAL_ELEMENTS = 5

  const filledStars = Math.floor(rate)
  const hasHalfStar = rate % 1 !== 0

  const starIcons = Array.from({ length: filledStars }, (_, i) => <AiFillStar key={`filled-${i}`} />)


  if (hasHalfStar) {
    starIcons.push(<BsStarHalf key='half' />)
  }
  
  const remainingStars = Array.from({length: TOTAL_ELEMENTS - filledStars - (hasHalfStar ? 1 : 0)}, (_, i) => <AiOutlineStar key={`empty-${i}`} />)

  return [...starIcons, ...remainingStars]
}
