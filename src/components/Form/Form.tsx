import { useFormik } from 'formik';
import * as yup from 'yup';
import { reservationProps } from 'sections/Reservation';
import {InputField} from './InputField';
import {RadioGenderInputs} from './RadioGenderInputs';
import {SelectField} from './SelectField';
import {TextAreaField} from './TextArea';
import { ChangeEvent } from 'react';
import { InputNumberField } from './InputNumberField';

export function Form({ userTour, handleUserTour, tourNames }: reservationProps) {
  
  const schema = yup.object().shape({
    firstName: yup.string().min(3).required(),
    lastName: yup.string().min(3).required(),
    gender: yup.string().required(),
    email: yup.string().required(),
    phoneNumber: yup.string().required(),
    additionalInformation: yup.string(),
    holiday: yup.string().required()

  });

  const handleOnSubmit = () => {
    if (userTour) {
      const { name: holiday, price, depart: departDate, return: returnDate } = userTour;
      const reservation = {
        ...values,
        holiday,
        price,
        departDate,
        returnDate,
      };
      console.log(reservation);
    }
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
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
  });

  console.log(errors)

  const onTourChange = (event: ChangeEvent<HTMLSelectElement>) => {
    handleUserTour(event.currentTarget.value)
    handleChange(event)
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form__section'>
        <h4 className='form__section-title'>Personal Information</h4>
        <InputField
          label='First Name'
          id='firstName'
          placeholder='John'
          value={values.firstName}
          onChange={handleChange}
        />
        <InputField
          label='Last Name'
          id='lastName'
          placeholder='Smith'
          value={values.lastName}
          onChange={handleChange}
        />
        <RadioGenderInputs value={values.gender} onChange={handleChange} />
      </div>

      <div className='form__section'>
        <h4 className='form__section-title'>Pick your holiday</h4>
        <SelectField
          label='Holiday'
          id='holiday'
          value={values.holiday}
          onChange={(event) => onTourChange(event)}
          options={tourNames}
        />
        <InputField
          label='Depart'
          id='depart-date'
          value={userTour?.depart ? userTour.depart.toISOString().substr(0, 10) : ''}
          readonly={true}
        />
        <InputField
          label='Return'
          id='return-date'
          value={userTour?.return ? userTour.return.toISOString().substr(0, 10) : ''}
          readonly={true}
        />
      </div>

      <div className='form__section'>
        <h4 className='form__section-title'>Contact</h4>
        <InputField
          label='Email'
          id='email'
          placeholder='JohnSmith1@example.com'
          value={values.email}
          onChange={handleChange}
        />
        <InputNumberField
          label='Phone Number'
          id='phoneNumber'
          placeholder='212-456-7890'
          value={values.phoneNumber}
          onChange={handleChange}
        />
      </div>

      <div className='form__section'>
        <h4 className='form__section-title'>Additional Information</h4>
        <TextAreaField
          label='Label Text'
          id='additionalInformation'
          placeholder='I have a problem with...'
          value={values.additionalInformation}
          onChange={handleChange}
        />
      </div>

      <button className='form__button' type='submit'>
        Make Reservation
      </button>
    </form>
  );
}