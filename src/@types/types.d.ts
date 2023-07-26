declare module '@splidejs/react-splide'

declare module 'module-name' {
  export function myFunction(): string
}

interface MenuItemProps {
  id: string
  page: string
}

interface tourProps {
  name: string
  description: string
  price: number
  depart: Date
  return: Date
  image: string
}

interface reservationProps {
  userTour: tourProps | null
  handleUserTour: handleUserTourProps
  tourNames: string[]
}

type handleUserTourProps = (name: string | null) => void
