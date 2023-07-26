
import { createContext, useState, useContext } from 'react'
import { HandleUserTour } from 'entities/handlers'
import { Tour } from 'entities/tour';
import { tours } from 'assets/data/tours';


type TourContextType = {
    userTour: Tour | null
    handleUserTour: HandleUserTour
} | null;
  
  const TourContext = createContext<TourContextType>({
    userTour: null, 
    handleUserTour: () => null
  })
  
  export const useTourContext = () => {
    const context = useContext(TourContext);
    if (!context) {
      throw new Error('useTourContext must be used within a TourContextProvider');
    };
  
    return context;
  }
  
export const TourProvider = ({children} : {children: React.ReactNode}) => {
    const [userTour, setUserTour] = useState<Tour | null>(null)
  
    const handleUserTour = (name: string | null) => {
      name ? setUserTour(tours.filter((tour) => tour.name === name)[0]) : setUserTour(null)
    }
  
    return (
      <TourContext.Provider value={{userTour, handleUserTour}}>
        {children}
      </TourContext.Provider>
    )
  }