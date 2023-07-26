import * as yup from 'yup'

const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/

export const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[A-Za-z]*$/, 'Please enter a valid name without spaces')
    .max(40)
    .required('First name is required'),
  lastName: yup
    .string()
    .matches(/^[A-Za-z]*$/, 'Please enter a valid name without spaces')
    .max(40)
    .required(),
  gender: yup.string().required('Please select a gender'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('This field is required')
    .test(
      'no-spaces',
      'Spaces are not allowed in the email without spaces',
      (value) => !/\s/.test(value),
    ),
  phoneNumber: yup.string().matches(phoneRegex).required('Phone number is required.'),
  additionalInformation: yup.string(),
  holiday: yup.string().required('Please select your holiday option'),
})
