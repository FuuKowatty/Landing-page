import { FormEvent } from 'react'
import { Modal } from './Modal'
import { useModal } from 'hooks/useModal'
import { contactData, socialMediaData } from 'assets/data/footer'

export function Footer() {
  const { isModalOpen, isClosing, openModal, closeModal } = useModal()

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.currentTarget.reset()
    openModal()
  }

  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__section'>
          <p className='footer__section--title'>Keep Connected</p>
          <ul>
            {contactData.map((platform) => (
              <li key={platform.id}>
                <span>{platform.icon}</span>
                <p>{platform.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='footer__section'>
          <p className='footer__section--title'>Contact Information</p>
          <ul>
            {socialMediaData.map((contact) => (
              <li key={contact.id}>
                <span>{contact.icon}</span>
                <p>{contact.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='footer__section--newsletter'>
          <p className='footer__section--title'>Newsletter</p>
          <form className='footer__newsletter' onSubmit={handleNewsletterSubmit}>
            <input
              type='email'
              aria-label='newsletter'
              className='footer__input'
              placeholder='enter a email'
              required
            />
            <button className='footer__button'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='footer__copyright'>
        <span>&#169;2023 FuuKowatty</span>
        <ul>
          <li>Company Information </li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      {isModalOpen && <Modal onClose={closeModal} isClosing={isClosing} />}
    </footer>
  )
}
