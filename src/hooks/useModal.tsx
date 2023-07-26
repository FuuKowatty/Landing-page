import { useState } from 'react'

interface Modal {
  isModalOpen: boolean
  isClosing: boolean
  openModal: () => void
  closeModal: () => void
}

export const useModal = (): Modal => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isClosing, setIsClosing] = useState<boolean>(false)

  const openModal = (): void => {
    setIsModalOpen(true)
  }

  const closeModal = (): void => {
    setIsClosing(true)

    setTimeout(() => {
      setIsModalOpen(false)
      setIsClosing(false)
    }, 300)
  }

  return { isModalOpen, isClosing, openModal, closeModal }
}
