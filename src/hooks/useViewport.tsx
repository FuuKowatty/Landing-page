import { useEffect, useState } from 'react'

export const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  const browserWidth = width
  const isMobile = width < 600;
  const isTablet = width < 1000;
  return { browserWidth, isMobile, isTablet }
}