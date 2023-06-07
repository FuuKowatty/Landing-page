import { useFormik } from 'formik'
import { reservationProps } from 'sections/Reservation'
import { InputField } from './InputField'
import { RadioGenderInputs } from './RadioGenderInputs'
import { SelectField } from './SelectField'
import { TextAreaField } from './TextArea'
import { ChangeEvent, MouseEvent, useEffect } from 'react'
import { schema } from 'utils/schema'
import { Modal } from 'components/Modal'
import { useModal } from 'hooks/useModal'

export function Form({ userTour, handleUserTour, tourNames }: reservationProps) {
  const { isModalOpen, isClosing, openModal, closeModal } = useModal();

  const handleCloseModal = () => {
    closeModal()
  }

  const handleOnSubmit = () => {
    if (userTour) {
      openModal()
    }
  }

  const { handleSubmit, handleChange, handleReset, values, errors, touched, setFieldValue } =
    useFormik({
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

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form__section'>
          <h3 className='form__section-title'>Personal Information</h3>
          <InputField
            label='First Name'
            id='firstName'
            placeholder='John'
            value={values.firstName}
            onChange={handleChange}
            required={true}
            error={errors.firstName}
            touched={touched.firstName}
          />
          <InputField
            label='Last Name'
            id='lastName'
            placeholder='Smith'
            value={values.lastName}
            onChange={handleChange}
            required={true}
            error={errors.lastName}
            touched={touched.lastName}
          />
          <RadioGenderInputs
            value={values.gender}
            onChange={handleChange}
            required={true}
            error={errors.gender}
            touched={touched.gender}
          />
        </div>

        <div className='form__section'>
          <h3 className='form__section-title'>Pick your holiday</h3>
          <SelectField
            label='Holiday'
            id='holiday'
            value={values.holiday}
            onChange={(event) => onTourChange(event)}
            options={tourNames}
            required={true}
            error={errors.holiday}
            touched={touched.holiday}
          />
          <div className='form__date__container'>
            <InputField
              type='date'
              label='Depart'
              id='depart-date'
              value={userTour?.depart ? userTour.depart.toISOString().substr(0, 10) : ''}
              readonly={true}
            />

            <InputField
              type='date'
              label='Return'
              id='return-date'
              value={userTour?.return ? userTour.return.toISOString().substr(0, 10) : ''}
              readonly={true}
            />
          </div>
        </div>

        <div className='form__section'>
          <h3 className='form__section-title'>Contact</h3>
          <InputField
            label='Email'
            id='email'
            placeholder='JohnSmith1@example.com'
            value={values.email}
            onChange={handleChange}
            required={true}
            error={errors.email}
            touched={touched.email}
          />
          <InputField
            type='tel'
            label='Phone Number'
            id='phoneNumber'
            placeholder='2124567890'
            value={values.phoneNumber}
            onChange={handleChange}
            required={true}
            error={errors.phoneNumber}
            touched={touched.phoneNumber}
          />
        </div>

        <div className='form__section'>
          <h3 className='form__section-title'>Additional Information</h3>
          <TextAreaField
            label='Label Text'
            id='additionalInformation'
            placeholder='I have a problem with...'
            value={values.additionalInformation}
            onChange={handleChange}
          />
        </div>
        <div className='buttons__container'>
          <button className='form__button--reset' type='reset' onClick={onFormReset}>
            Clear Form
          </button>
          <button className='form__button--submit' type='submit'>
            Make Reservation
          </button>
        </div>
      </form>
      {userTour && isModalOpen && <Modal onClose={handleCloseModal} isClosing={isClosing} />}
    </>
  )
}
