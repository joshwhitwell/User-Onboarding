//Import dependencies
import * as yup from 'yup'

export default yup.object().shape({
    name: yup
        .string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
    terms: yup
        .boolean()
        .oneOf([true], 'Must accept terms and conditions')
})