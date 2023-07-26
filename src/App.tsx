import { Navbar } from 'components/Navbar'
import { Header } from 'sections/Header'
import { Explore } from 'sections/Explore'
import { Reviews } from 'sections/Reviews'
import { Reservation } from 'sections/Reservation'
import About from 'sections/About'
import { Footer } from 'components/Footer'
import { TourProvider } from 'context/TourProvider'



export function App() {
  return (
    <main className='container'>
      <Navbar />
      <Header />
      <About />
      <Reviews />
      <TourProvider>
      <Explore />
      <Reservation/>
      </TourProvider>
      <Footer />
    </main>
  )
}
