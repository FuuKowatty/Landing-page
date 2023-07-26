import { useFormik } from 'formik'
import { schema } from 'utils/schema'
import { useModal } from './useModal'
import { ChangeEvent, MouseEvent, useEffect } from 'react'
import { useTourContext } from 'context/TourProvider'
import { tours } from 'assets/data/tours'

export function useForm() {

    const { userTour, handleUserTour } = useTourContext()
    const tourNames = tours.map(tour => tour.name)
    const {openModal, closeModal, ...modalState} = useModal()

    const handleOnSubmit = () => {
        if (userTour) {
            openModal()
        }
      }

    const {setFieldValue, handleReset, ...formik} = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          gender: '',
          email: '',
          phoneNumber: '',
          additionalInformation: '',
          holiday: '',
        },
        validationSchema: schema,
        onSubmit: handleOnSubmit,
      })

    useEffect(() => {
      if (userTour) {
        setFieldValue('holiday', userTour.name)
      }
    }, [userTour, setFieldValue])
  
    const onTourChange = (event: ChangeEvent<HTMLSelectElement>) => {
      handleUserTour(event.currentTarget.value)
    }

      const onFormReset = (event: MouseEvent<HTMLButtonElement>) => {
        handleUserTour(null)
        handleReset(event)
      }
    
      const handleCloseModal = (event: MouseEvent<HTMLButtonElement>) => {
        onFormReset(event)
        closeModal()
      }
    






  return {
    form: {...formik, onFormReset},
    modal: {...modalState, handleCloseModal},
    onTourChange,
    tourNames,
  }
}
