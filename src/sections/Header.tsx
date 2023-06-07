import 'sass/style.scss'

export function Header() {
  return (
    <div className='header' id='Home'>
      <h1 className='header__text'>Travel around the world!</h1>
      
      <a href='#Reservation' className='header__button reset__anchor breathing__animation' role='button' >
  Sign Up
</a>
     

      <a href='http://www.freepik.com' className='header_img_author' target='_blank'>
        Header Designed by gstudioimagen / Freepik
      </a>
    </div>
  )
}
