import { Navbar } from 'components/Navbar'
import { Header } from 'sections/Header'
import { Explore } from 'sections/Explore'
import { Gallery } from 'components/Gallery'
import { Reviews } from 'sections/Reviews'
import { Reservation } from 'sections/Reservation'

export function App() {
  return (
    <div className='container'>
      <Navbar />
      <Header />
      <Gallery />
      <Reviews />
      <Explore />
      <Reservation />
    </div>
  )
}
