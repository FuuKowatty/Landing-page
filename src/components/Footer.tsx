import {AiFillInstagram, AiOutlineTwitter, AiFillPhone, AiOutlineMail, AiFillLinkedin} from 'react-icons/ai';
import {FaTiktok, FaGooglePlusG, FaFacebookF} from 'react-icons/fa';

const SocialMedia = [
    {
        id: 0,
        icon: <FaFacebookF />,
        text: 'Like Us'
    },
    {
        id: 1,
        icon: <AiOutlineTwitter />,
        text: 'Follow Us'
    },
    {
        id: 2,
        icon: <AiFillInstagram />,
        text: 'Follow Us'
    },
    {
        id: 3,
        icon: <FaTiktok />,
        text: 'Follow Us'
    },
    {
        id: 4,
        icon: <FaGooglePlusG />,
        text: 'Add Us'
    },

]

const Contact = [
    {
        id: 0,
        icon: <AiFillPhone />,
        text: '1234567890'
    },
    {
        id: 1,
        icon: <AiOutlineMail />,
        text: 'fake_travels@xD.com'
    },
    {
        id: 2,
        icon: <AiFillLinkedin />,
        text: '@fake_travels'
    },
]

export function Footer() {
  return (
    <footer className="footer">
        <div className="footer__content">
            <div className="footer__section">
                <h2 className='footer__section--title'>Keep Connected</h2>
                <ul>
                    {SocialMedia.map(platform => (
                        <li key={platform.id}>
                            <span>{platform.icon}</span>
                            <p>{platform.text}</p>
                        </li>
                    ))}

                </ul>
            </div>
            <div className="footer__section">
                <h2 className='footer__section--title'>Contact Information</h2>
                <ul>
                {Contact.map(contact => (
                        <li key={contact.id}>
                            <span>{contact.icon}</span>
                            <p>{contact.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="footer__section--newsletter">
                <h2 className='footer__section--title'>Newsletter</h2>
                <form className='footer__newsletter'>
                    <input type="text" aria-label='newsletter' className='footer__input' placeholder='enter a email'/>
                    <button className='footer__button'>Subscribe</button>
                </form>
            </div>
        </div>
        <div className="footer__copyright">
            <span>&#169;2023 FuuKowatty</span>
            <ul>
                <li>Company Information </li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
            </ul>
        </div>
    </footer>
  )
}
