import { Navbar } from 'components/Navbar'
import { Header } from 'sections/Header'
import { Explore } from 'sections/Explore'

export function App() {
  return (
    <div className='container'>
      <Navbar />
      <Header />
      <Explore />
    </div>
  )
}
