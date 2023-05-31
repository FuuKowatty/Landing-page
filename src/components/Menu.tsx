import 'sass/style.scss'

const pages = ['Page1', 'Page2', 'Page3', 'Page4', 'Page5']

export function Menu({ isClosing }: { isClosing: boolean}) {


  return (
    <div className={`menu ${isClosing ? 'closing' : ''}`}>

      {pages.map((page) => (
        <p className='menu__item' key={page}>
          {page}
        </p>
      ))}
    </div>
  )
}
