import { useEffect, useState } from 'react'

interface Viewport {
  browserWidth: number
  isMobile: boolean
  isTablet: boolean
}

export const useViewport = (): Viewport => {
  const [width, setWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  const browserWidth: number = width
  const isMobile: boolean = width < 600
  const isTablet: boolean = width < 1000

  return { browserWidth, isMobile, isTablet }
}
