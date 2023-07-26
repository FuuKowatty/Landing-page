import { MouseEvent, useEffect } from 'react'

interface ModalProps {
  onClose: (event: MouseEvent<HTMLButtonElement>) => void
  isClosing: boolean
  title: string
  description: string
}

export function Modal({ onClose, isClosing, title, description }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = '15px' //  /* Avoid width reflow */

    return () => {
      document.body.style.overflow = 'auto'
      document.body.style.paddingRight = '0'
    }
  }, [])

  return (
    <div className='modal'>
      <div className={`modal__content ${isClosing ? 'modal__close' : 'modal__open'}`}>
        <h2>{title}</h2>
        <p>{description}</p>

        <button className='modal__button' onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  )
}
