import { FormEvent } from 'react'
import { Modal } from './Modal'
import { useModal } from 'hooks/useModal'

import {
  AiFillInstagram as InstagramIcon,
  AiOutlineTwitter as TwitterIcon,
  AiFillPhone as PhoneIcon,
  AiOutlineMail as MailIcon,
  AiFillLinkedin as LinkedinIcon,
} from 'react-icons/ai'
import {
  FaTiktok as TiktokIcon,
  FaGooglePlusG as GooglePlusIcon,
  FaFacebookF as FacebookIcon,
} from 'react-icons/fa'

export const socialMediaIcons = [
  {
    id: 0,
    icon: <FacebookIcon />,
    text: 'Like Us',
  },
  {
    id: 1,
    icon: <TwitterIcon />,
    text: 'Follow Us',
  },
  {
    id: 2,
    icon: <InstagramIcon />,
    text: 'Follow Us',
  },
  {
    id: 3,
    icon: <TiktokIcon />,
    text: 'Follow Us',
  },
  {
    id: 4,
    icon: <GooglePlusIcon />,
    text: 'Add Us',
  },
]

export const contactInformation = [
  {
    id: 0,
    icon: <PhoneIcon />,
    text: '1234567890',
  },
  {
    id: 1,
    icon: <MailIcon />,
    text: 'fake_travels@xD.com',
  },
  {
    id: 2,
    icon: <LinkedinIcon />,
    text: '@fake_travels',
  },
]

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
            {contactInformation.map((platform) => (
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
            {socialMediaIcons.map((contact) => (
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
      {isModalOpen && (
        <Modal
          title='Subscribtion Successful'
          description='Your subscrbtion of our newsletter has been successful'
          onClose={closeModal}
          isClosing={isClosing}
        />
      )}
    </footer>
  )
}
