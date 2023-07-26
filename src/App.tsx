import { Navbar } from 'components/Navbar'
import { Header } from 'sections/Header'
import { Explore } from 'sections/Explore'
import { Reviews } from 'sections/Reviews'
import { Reservation } from 'sections/Reservation'
import { useState } from 'react'
import About from 'sections/About'
import { Footer } from 'components/Footer'
import { toursData } from 'assets/data/tours'
import { sectionsData } from 'assets/data/sections'

export function App() {
  const [userTour, setUserTour] = useState<tourProps | null>(null)

  const handleUserTour = (name: string | null) => {
    name ? setUserTour(toursData.filter((tour) => tour.name === name)[0]) : setUserTour(null)
  }

  return (
    <main className='container'>
      <Navbar pages={sectionsData} />
      <Header />
      <About />
      <Reviews />
      <Explore tours={toursData} handleUserTour={handleUserTour} />
      <Reservation
        userTour={userTour}
        tourNames={toursData.map((tour) => tour.name)}
        handleUserTour={handleUserTour}
      />
      <Footer />
    </main>
  )
}
