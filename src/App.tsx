import { Navbar } from 'components/Navbar'
import { Header } from 'sections/Header'
import { Explore } from 'sections/Explore'
import { Gallery } from 'components/Gallery'

export function App() {
  return (
    <div className='container'>
      <Navbar />
      <Header />
      <Gallery />
      <Explore />
    </div>
  )
}
