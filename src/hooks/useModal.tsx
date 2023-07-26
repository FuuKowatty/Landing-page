import { useState } from 'react'

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = ()=> {
    setIsClosing(true)

    setTimeout(() => {
      setIsModalOpen(false)
      setIsClosing(false)
    }, 300)
  }

  return { isModalOpen, isClosing, openModal, closeModal }
}
