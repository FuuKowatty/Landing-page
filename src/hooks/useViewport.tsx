import { useEffect, useState } from 'react'

export const useViewport = () => {
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => setBrowserWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  const isMobile = browserWidth < 600
  const isTablet= browserWidth < 1000

  return { browserWidth, isMobile, isTablet }
}
