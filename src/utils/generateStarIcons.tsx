import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';

export function generateStarIcons(rate: number) {
  const totalElements = 5;
  const starIcons = [];

  const filledStars = Math.floor(rate);
  const hasHalfStar = rate % 1 !== 0;

  for (let i = 0; i < filledStars; i++) {
    starIcons.push(<AiFillStar key={`filled-${i}`} />);
  }

  if (hasHalfStar) {
    starIcons.push(<BsStarHalf key="half" />);
  }

  const remainingStars = totalElements - filledStars - (hasHalfStar ? 1 : 0);

  for (let i = 0; i < remainingStars; i++) {
    starIcons.push(<AiOutlineStar key={`empty-${i}`} />);
  }

  return starIcons;
}
