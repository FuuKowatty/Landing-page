import { useTourContext } from 'context/TourProvider'
import { InputField } from './InputField'
import { RadioGenderInputs } from './RadioGenderInputs'
import { SelectField } from './SelectField'
import { TextAreaField } from './TextArea'
import { Modal } from 'components/Modal'
import { useForm } from 'hooks/useForm'

export function Form() {
  const { userTour } = useTourContext()
  const convertToDDMMYYYY = (date: Date) => {
    return date.toISOString().substring(0, 10)
  }

  const {
    form: { handleSubmit, handleChange, values, errors, touched, onFormReset },
    modal: { isModalOpen, isClosing, handleCloseModal },
    tourNames,
    onTourChange,
  } = useForm()

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <fieldset className='form__section'>
          <legend className='form__section-title'>Personal Information</legend>
          <InputField
            label='First Name'
            id='firstName'
            placeholder='John'
            value={values.firstName}
            onChange={handleChange}
            required
            error={errors.firstName}
            touched={touched.firstName}
          />
          <InputField
            label='Last Name'
            id='lastName'
            placeholder='Smith'
            value={values.lastName}
            onChange={handleChange}
            required
            error={errors.lastName}
            touched={touched.lastName}
          />
          <RadioGenderInputs
            value={values.gender}
            onChange={handleChange}
            required
            error={errors.gender}
            touched={touched.gender}
          />
        </fieldset>

        <fieldset className='form__section'>
          <legend className='form__section-title'>Pick your holiday</legend>
          <SelectField
            label='Holiday'
            id='holiday'
            value={values.holiday}
            onChange={(event) => onTourChange(event)}
            options={tourNames}
            required
            error={errors.holiday}
            touched={touched.holiday}
          />
          <div className='form__date__container'>
            <InputField
              type='date'
              label='Depart'
              id='depart-date'
              value={userTour?.depart ? convertToDDMMYYYY(userTour.depart) : ''}
              readOnly
            />

            <InputField
              type='date'
              label='Return'
              id='return-date'
              value={userTour?.return ? convertToDDMMYYYY(userTour.return) : ''}
              readOnly
            />
          </div>
        </fieldset>

        <fieldset className='form__section'>
          <legend className='form__section-title'>Contact</legend>
          <InputField
            label='Email'
            id='email'
            placeholder='JohnSmith1@example.com'
            value={values.email}
            onChange={handleChange}
            required
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
            required
            error={errors.phoneNumber}
            touched={touched.phoneNumber}
          />
        </fieldset>

        <fieldset className='form__section'>
          <legend className='form__section-title'>Additional Information</legend>
          <TextAreaField
            label='Label Text'
            id='additionalInformation'
            placeholder='I have a problem with...'
            value={values.additionalInformation}
            onChange={handleChange}
          />
        </fieldset>
        <div className='buttons__container'>
          <button className='form__button--reset' type='reset' onClick={onFormReset}>
            Clear Form
          </button>
          <button className='form__button--submit' type='submit'>
            Make Reservation
          </button>
        </div>
      </form>
      {userTour && isModalOpen && (
        <Modal
          title='Reservation Completed'
          description='Your Reservation has been completed'
          onClose={handleCloseModal}
          isClosing={isClosing}
        />
      )}
    </>
  )
}
