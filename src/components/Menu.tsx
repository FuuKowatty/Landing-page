import 'sass/style.scss';

const pages = [
    'Page1',
    'Page2',
    'Page3',
    'Page4',
    'Page5',
  ]

export function Menu() {
  return (
    <div className='menu'>
        {pages.map(page => <p className='menu__item' key={page}>{page}</p>)}
    </div>
  )
}
