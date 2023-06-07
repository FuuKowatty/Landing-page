import { Navbar } from 'components/Navbar'
import { Header } from 'sections/Header'
import { Explore } from 'sections/Explore'
import { Reviews } from 'sections/Reviews'
import { Reservation } from 'sections/Reservation'
import { useState } from 'react'
import About from 'sections/About'
import { Footer } from 'components/Footer'

export type handleUserTourProps = (name: string | null) => void
export interface tourProps {
  name: string
  description: string
  price: number
  depart: Date
  return: Date
  image: string
}

const pages = [
  {
    id: 'Home',
    page: 'Home',
  },
  {
    id: 'About',
    page: 'About Us',
  },
  {
    id: 'Opinions',
    page: 'Opinions',
  },
  {
    id: 'Explore',
    page: 'Explore',
  },
  {
    id: 'Reservation',
    page: 'Reservation',
  },
]

const tours = [
  {
    name: 'Japan Sakura Delight',
    description: 'Explore the captivating beauty of Japan during cherry blossom season.',
    price: 2500,
    depart: new Date('2024-03-15'),
    return: new Date('2024-03-28'),
    image: 'https://i.imgur.com/lih5zht.jpg',
  },
  {
    name: 'Thailand Tropical Paradise',
    description: 'Discover the exotic wonders of Thailand\'s stunning islands.',
    price: 1800,
    depart: new Date('2024-05-10'),
    return: new Date('2024-05-24'),
    image: 'https://i.imgur.com/wCuk0g5.jpg',
  },
  {
    name: 'India Cultural Odyssey',
    description:
      'Embark on a cultural journey through India\'s ancient landmarks and diverse cities.',
    price: 2300,
    depart: new Date('2024-07-01'),
    return: new Date('2024-07-15'),
    image: 'https://i.imgur.com/vc9WZgR.jpg',
  },
  {
    name: 'Vietnam Ha Long Bay Adventure',
    description: 'Cruise through the mystical limestone karsts of Ha Long Bay.',
    price: 1700,
    depart: new Date('2024-09-05'),
    return: new Date('2024-09-18'),
    image: 'https://i.imgur.com/ihrzeHG.jpg',
  },
  {
    name: 'South Korea Seoul City Escape',
    description: 'Experience the dynamic energy of Seoul, South Korea\'s capital.',
    price: 1500,
    depart: new Date('2024-11-15'),
    return: new Date('2024-11-28'),
    image: 'https://i.imgur.com/ui3PtXl.jpg',
  },
  {
    name: 'Indonesia Bali Bliss',
    description: 'Unwind in the paradise island of Bali.',
    price: 2000,
    depart: new Date('2025-01-10'),
    return: new Date('2025-01-24'),
    image: 'https://i.imgur.com/YkXblLr.jpg',
  },
]

export function App() {
  const [userTour, setUserTour] = useState<tourProps | null>(null)

  const handleUserTour = (name: string | null) => {
    name ? setUserTour(tours.filter((tour) => tour.name === name)[0]) : setUserTour(null)
  }

  return (
    <div className='container'>
      <Navbar pages={pages} />
      <Header />
      <About />
      <Reviews />
      <Explore tours={tours} handleUserTour={handleUserTour} />
      <Reservation
        userTour={userTour}
        tourNames={tours.map((tour) => tour.name)}
        handleUserTour={handleUserTour}
      />
      <Footer />
    </div>
  )
}
