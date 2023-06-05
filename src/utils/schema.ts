import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const schema = yup.object().shape({
    firstName: yup.string().required('This field is required'),
    lastName: yup.string().required('This field is required'),
    gender: yup.string().required('Please select a gender'),
    email:  yup.string().email('Please enter a valid email').required('This field is required'),
    phoneNumber: yup.string()
    .matches(/^[0-9]+$/, 'Please provide only numeric digits')
    .matches(/^[0-9]{10,15}$/, 'Phone number should be between 10 and 15 digits')
    .matches(phoneRegExp, 'Please provide a valid phone number')
    .required('This field is required'),
    additionalInformation: yup.string(),
    holiday: yup.string().required('Please select your holiday option'),
  });